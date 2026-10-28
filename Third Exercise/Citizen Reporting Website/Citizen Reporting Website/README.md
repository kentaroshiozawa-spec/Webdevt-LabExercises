# Suri Web Development Demo

This project uses HTML, CSS, vanilla JavaScript, Bootstrap, and a JSON file for sample report data.

## Run the site

Do not open `index.html` or `track.html` by double-clicking the file. The browser treats that as a `file://` page and may block JavaScript from loading `data/reports.json`.

Run the site through a local web server instead. Choose either Python's built-in server or the VS Code Live Server extension.

### Python built-in server

1. Install Python from [python.org/downloads](https://www.python.org/downloads/) if it is not already installed. On Windows, enable **Add Python to PATH** during setup.
2. Open a terminal in the project folder. In PowerShell, for example:

	```powershell
	cd "C:\path\to\Citizen Reporting Website"
	```

3. Start the server:

	```powershell
	py -m http.server 8000
	```

	If `py` is not recognized but `python` works, use `python -m http.server 8000`. On macOS or Linux, use `python3 -m http.server 8000`.
4. Open `http://localhost:8000/` in a browser. Add `/track.html` to view the tracker.
5. To stop the server, return to the terminal and press `Ctrl+C`.

### VS Code Live Server

1. Install the **Live Server** extension in VS Code if it is not already installed.
2. Open `index.html` in the editor.
3. Select **Go Live** in the VS Code status bar.
4. Open the local HTTP address shown by VS Code. Add `/track.html` to that address to visit the tracker.
5. To stop the server, select the port number in the VS Code status bar.

The site uses CDN-hosted Bootstrap, icons, and fonts, so an internet connection is needed for those assets. Sample reports are loaded from `data/reports.json`. Reports submitted through the demo are stored only in that browser's local storage and are not sent to an agency.