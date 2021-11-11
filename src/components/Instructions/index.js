const Instructions = () => {
  return <div>
    <h2>Instructions</h2>
    <ol>
      <li>In the browser, open "Developer Tools"</li>
      <li>In "Developer Tools", open "Console"</li>
      <li>In each section, read the details,</li>
      <li>understand the representation of the code in the code snippet,</li>
      <li>and analyze the logs in the console as you interact with the rendered version of that code</li>
    </ol>
    <em>
       *NOTE: The displayed code is not an accurate representation of this app's code, and may have been modified for readability<br/><br />
       **NOTE: Double logging only happens in development mode and should help to find accidental side effects in the render phase.
    </em>
  </div>;
};

export default Instructions;
