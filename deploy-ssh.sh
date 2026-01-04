#!/bin/bash

# SSH Deployment Script for MoharChess Website
# Deploys the built files to the server

SERVER_IP="151.106.97.215"
SERVER_PORT="65002"
SERVER_USER="u663545592"
SERVER_PASS="Mh@rTRKK9@qd"
REMOTE_DIR="public_html"  # Change this to your actual web directory

echo "Building the Next.js application..."
npm run build

echo "Deploying files to server..."
echo "Server: $SERVER_USER@$SERVER_IP:$SERVER_PORT"

# Try rsync first
echo "Attempting rsync deployment..."
sshpass -p "$SERVER_PASS" rsync -avz --delete \
  -e "ssh -p $SERVER_PORT -o StrictHostKeyChecking=no" \
  out/ \
  $SERVER_USER@$SERVER_IP:~/$REMOTE_DIR/

if [ $? -eq 0 ]; then
  echo "Deployment successful via rsync!"
else
  echo "Rsync failed, trying alternative method..."
  
  # Alternative: Use tar and scp
  echo "Creating archive..."
  cd out
  tar -czf ../deploy.tar.gz .
  cd ..
  
  echo "Uploading archive..."
  sshpass -p "$SERVER_PASS" scp -P $SERVER_PORT \
    -o StrictHostKeyChecking=no \
    deploy.tar.gz $SERVER_USER@$SERVER_IP:~/
  
  if [ $? -eq 0 ]; then
    echo "Archive uploaded. Please extract it manually on the server:"
    echo "  tar -xzf deploy.tar.gz -C $REMOTE_DIR/"
    echo "Or contact your hosting provider for the correct deployment method."
  else
    echo "Deployment failed. Please check:"
    echo "1. Server credentials are correct"
    echo "2. Port $SERVER_PORT is open"
    echo "3. Your hosting provider allows SSH/SCP access"
    echo "4. The web directory path is correct (currently: ~/$REMOTE_DIR)"
  fi
  
  # Cleanup
  rm -f deploy.tar.gz
fi

echo "Deployment process completed."

