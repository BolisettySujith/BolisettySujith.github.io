# How to render markdown in flutter apps

This blog tells about how to render the readme in the flutter app.

To render the `.md` file content inside your Flutter app, you'll need to use a package that can render the markdown format. Flutter doesn't have native support for rendering Markdown files as UI components, but with the help of the `flutter_markdown` package, you can easily render it.

Here's a step-by-step guide on how to display the contents of the `.md` file (README.md) in your Flutter app:

### Step 1: Add `flutter_markdown` to `pubspec.yaml`

First, you need to add the `flutter_markdown` package to your `pubspec.yaml` file:

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_markdown: ^0.6.9 # Check for the latest version
```

Then, run `flutter pub get` to install the package.

### Step 2: Load and Read the `.md` file

Since you want to render the content of a `.md` file located in your `lib` folder, you can load this file using `flutter/services.dart` package.

Here’s how you can do it:

1. Import necessary packages.
2. Use the `rootBundle` to load the file content.
3. Pass the loaded content to the `flutter_markdown` widget for rendering.

### Step 3: Code Implementation

Here’s an example implementation:

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' as root_bundle;
import 'package:flutter_markdown/flutter_markdown.dart';

class ReadMeScreen extends StatefulWidget {
  @override
  _ReadMeScreenState createState() => _ReadMeScreenState();
}

class _ReadMeScreenState extends State<ReadMeScreen> {
  String _readMeContent = "";

  @override
  void initState() {
    super.initState();
    _loadReadMeFile();
  }

  // Method to load the README.md file from the assets
  Future<void> _loadReadMeFile() async {
    String content = await root_bundle.rootBundle.loadString('assets/README.md');
    setState(() {
      _readMeContent = content;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('README'),
      ),
      body: _readMeContent.isEmpty
          ? Center(child: CircularProgressIndicator()) // Show loading until file is loaded
          : Markdown(data: _readMeContent),
    );
  }
}
```

### Step 4: Place the Markdown File in the Assets

1. Create a folder called `assets` at the root of your project (if not already created).
2. Move your `README.md` file into the `assets` folder.

The structure should look like this:

```
my_flutter_app/
├── assets/
│   └── README.md
├── lib/
│   └── main.dart
├── pubspec.yaml
└── ...
```

### Step 5: Update `pubspec.yaml` to include the assets

In your `pubspec.yaml`, add the assets section to ensure that the `.md` file is included in your app:

```yaml
flutter:
  assets:
    - assets/README.md
```

### Step 6: Run the App

Now, when you run the app, the content of the `README.md` file will be displayed using the `flutter_markdown` widget, which can render Markdown syntax as Flutter widgets (headings, lists, links, etc.).

### Customizations

The `flutter_markdown` package supports various customization options, such as styling, adding custom elements, and handling interactions. You can pass a `MarkdownStyleSheet` to change the appearance of the rendered content. For example:

```dart
Markdown(
  data: _readMeContent,
  styleSheet: MarkdownStyleSheet(
    h1: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
    p: TextStyle(fontSize: 18),
  ),
)
```

This will change the style for the headings and paragraphs.

### Conclusion

This is how you can render a `.md` file (such as a README) inside a Flutter app. You just need the right package (`flutter_markdown`), load the content from your assets, and display it in your app's UI.
