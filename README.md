<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intersection Observer Component</title>
</head>

<body>

  <h1>Intersection Observer Component</h1>

  <p>This component provides functionality for observing intersections of elements in the DOM. It can be used for triggering animations, lazy loading, and other effects based on the visibility of elements.</p>

  <h2>Installation</h2>

  <p>To use this component in your project, follow these steps:</p>

  <ol>
    <li>Import the <code>IntersectionObserverClass</code> class into your TypeScript or JavaScript file:</li>
  </ol>

  <pre><code>import IntersectionObserverClass from 'intersection-observer-component';</code></pre>

  <h2>Usage</h2>

  <ol>
    <li>Add the <code>.observedItem</code> class to elements you want to observe.</li>
    <li>Initialize the <code>IntersectionObserverClass</code> with the observed elements:</li>
  </ol>

  <pre><code>const observedItems = document.querySelectorAll('.observedItem');
if (observedItems) {
  new IntersectionObserverClass(observedItems);
}</code></pre>

  <h2>Features</h2>

  <ul>
    <li>Observes intersections of specified elements.</li>
    <li>Adds a CSS class to observed elements when they become visible in the viewport.</li>
  </ul>

  <h2>Example</h2>

  <pre><code>&lt;div class="observedItem"&gt;
  <!-- Content to observe -->
&lt;/div&gt;</code></pre>

  <h2>Contributing</h2>

  <p>Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>

  <h2>License</h2>

  <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>

</html>
