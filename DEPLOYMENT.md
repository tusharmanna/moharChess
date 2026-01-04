# Deployment Guide for MoharChess Website

## Server Details
- **IP:** 151.106.97.215
- **Port:** 65002 (SSH) / 21 (FTP - if available)
- **Username:** u663545592
- **Password:** Mh@rTRKK9@qd

## Deployment Package
A deployment archive has been created: `moharChess-deploy.tar.gz` (5.1 MB)

## Deployment Methods

### Method 1: FTP Upload (Recommended for Shared Hosting)

1. **Install an FTP client** (if not already installed):
   - FileZilla (free, cross-platform)
   - Cyberduck (free, Mac/Windows)
   - Or use built-in FTP in your file manager

2. **Connect via FTP:**
   - Host: 151.106.97.215
   - Port: 21 (or try 65002 if 21 doesn't work)
   - Username: u663545592
   - Password: Mh@rTRKK9@qd
   - Protocol: FTP or SFTP

3. **Upload files:**
   - Navigate to your web root directory (usually `public_html`, `www`, or `htdocs`)
   - Upload the `moharChess-deploy.tar.gz` file
   - Extract it on the server (via SSH or file manager)
   - OR extract locally and upload all files from the `out/` directory

### Method 2: Web-based File Manager (cPanel/Plesk)

1. Log into your hosting control panel
2. Open the File Manager
3. Navigate to your web root directory (`public_html` or `www`)
4. Upload `moharChess-deploy.tar.gz`
5. Extract the archive using the file manager's extract feature
6. Ensure all files are in the web root directory

### Method 3: Manual File Upload

1. Extract `moharChess-deploy.tar.gz` locally:
   ```bash
   tar -xzf moharChess-deploy.tar.gz
   ```
2. Upload all contents of the extracted folder to your web root via FTP or file manager
3. Ensure the directory structure is maintained

## Important Notes

- **Web Root Directory:** Typically one of these:
  - `public_html/`
  - `www/`
  - `htdocs/`
  - `domains/yourdomain.com/public_html/`

- **File Permissions:** After upload, ensure:
  - Directories: 755
  - Files: 644
  - `index.html` should be readable

- **Testing:** After deployment, visit your website to verify:
  - Homepage loads correctly
  - All pages are accessible
  - Images and assets load properly
  - February and March tournament pages work

## Troubleshooting

If SSH/SCP doesn't work (restricted shell):
- Use FTP (port 21) instead
- Contact your hosting provider for the correct deployment method
- Check if your hosting provider has a specific deployment tool or Git integration

## Files to Deploy

All files from the `out/` directory should be uploaded to your web root. This includes:
- `index.html` (homepage)
- All page directories (`about-us/`, `tournaments/`, etc.)
- `_next/` directory (JavaScript bundles)
- `images/` directory (all images)
- Other static assets

