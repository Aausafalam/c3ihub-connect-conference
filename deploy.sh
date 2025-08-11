#!/bin/zsh

target=$1

# If $1 is empty, show options for staging and production
if [ -z "$target" ]; then
    echo "Please select a target"
    select target in production staging; do
        break
    done
fi

case $target in
    production)
        echo "Deploying to production"
        ;;
    staging)
        echo "Deploying to staging"
        ;;
    *)
        echo "Invalid target"
        exit 1
        ;;
esac

# Build the project
npm run build
# Compress the build folder into dist.zip
zip -r dist.zip build

# Prompt for sudo password
echo "Please enter your sudo password to continue:"
sudo -v

# Set the correct permissions for the private key
chmod 600 /home/user/.ssh/C3iHub-Discourse-AWS-Mumbai.pem

# Transfer the zip file to the server
scp -i /home/user/.ssh/C3iHub-Discourse-AWS-Mumbai.pem -r dist.zip root@c3ihub.org:/var/$target/c3ihub-connect-conference/frontend/dist.zip

if [ $? -ne 0 ]; then
    echo "Failed to transfer dist.zip to the server"
    rm -rf dist.zip
    exit 1
fi

# SSH into the server and handle the deployment
ssh -i /home/user/.ssh/C3iHub-Discourse-AWS-Mumbai.pem root@c3ihub.org -t "
    cd /var/$target/c3ihub-connect-conference/frontend &&
    unzip -o dist.zip &&
    rm -rf dist.zip &&
    # Set ownership and permissions
    chown -R www-data:www-data . &&
    find . -type d -exec chmod 755 {} \; &&
    find . -type f -exec chmod 644 {} \;
"

# Clean up the local zip file
rm -rf dist.zip

if [ $? -ne 0 ]; then
    echo "Deployment failed"
    exit 1
fi


echo "C3i Conference Deployed"
