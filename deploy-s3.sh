#!/bin/bash

# S3 Deployment Script for MoharChess Website
# Make sure to set your bucket name and AWS credentials

BUCKET_NAME="your-bucket-name-here"
AWS_PROFILE="default"  # or your AWS profile name

echo "Building the Next.js application..."
npm run build

echo "Syncing files to S3 bucket: $BUCKET_NAME"
aws s3 sync out/ s3://$BUCKET_NAME --delete --profile $AWS_PROFILE

echo "Setting proper content types..."
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --metadata-directive REPLACE --content-type "text/html" --exclude "*" --include "*.html" --profile $AWS_PROFILE
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --metadata-directive REPLACE --content-type "text/css" --exclude "*" --include "*.css" --profile $AWS_PROFILE
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --metadata-directive REPLACE --content-type "application/javascript" --exclude "*" --include "*.js" --profile $AWS_PROFILE

echo "Deployment complete!"
echo "Your website should be available at: http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
echo "Or if you have a custom domain configured, use that instead."
