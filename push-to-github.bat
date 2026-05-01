@echo off
cd /d E:\work\moharChess

echo.
echo === MoharChess GitHub Push ===
echo.

git add .

set /p COMMIT_MSG="Enter commit message: "

git commit -m "%COMMIT_MSG%"

git push origin master

echo.
if %ERRORLEVEL% == 0 (
    echo SUCCESS: Code pushed to GitHub!
) else (
    echo ERROR: Push failed. Check the error above.
)

echo.
pause
