
# Repo bugs

After installing JSPM repos, the Google Material Design Lite library is incorrect. You need 
to create a new file at the top level (jspm/github/google) called "material-design-lite@1.0.2.js"
with the following contents:

```
module.exports = require("github:google/material-design-lite@1.0.2/material");
```
