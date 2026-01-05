#!/bin/bash

# Hostinger Deployment Script
# This script uploads files to Hostinger with progress logging

SERVER_IP="151.106.97.215"
SERVER_PORT="65002"
SERVER_USER="u663545592"
SERVER_PASS="Mh@rTRKK9@qd"
REMOTE_DIR="public_html"
LOCAL_DIR="out"

echo "=========================================="
echo "Hostinger Deployment Script"
echo "=========================================="
echo "Server: $SERVER_USER@$SERVER_IP:$SERVER_PORT"
echo "Remote Directory: ~/$REMOTE_DIR"
echo "Local Directory: $LOCAL_DIR"
echo "=========================================="
echo ""

# Count total files
TOTAL_FILES=$(find "$LOCAL_DIR" -type f | wc -l | tr -d ' ')
echo "Total files to upload: $TOTAL_FILES"
echo ""

# Upload using rsync with detailed progress
echo "Starting file upload..."
echo ""

sshpass -p "$SERVER_PASS" rsync -avz --progress --delete \
  --exclude='.DS_Store' \
  -e "ssh -p $SERVER_PORT -o StrictHostKeyChecking=no" \
  "$LOCAL_DIR/" \
  "$SERVER_USER@$SERVER_IP:~/$REMOTE_DIR/" 2>&1 | \
  while IFS= read -r line; do
    echo "$line"
    # Show progress for each file
    if [[ $line =~ ^[0-9]+% ]]; then
      echo -ne "\r$line"
    fi
  done

echo ""
echo ""
if [ ${PIPESTATUS[0]} -eq 0 ]; then
  echo "=========================================="
  echo "✓ Deployment completed successfully!"
  echo "=========================================="
else
  echo "=========================================="
  echo "✗ Deployment failed. Check errors above."
  echo "=========================================="
  exit 1
fi

