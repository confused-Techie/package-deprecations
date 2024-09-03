# dirshift

Modeled closely after `jscodeshift`, `dirshift` attempts to make it easy for transformers to check and validate
the structure of a directory.

`dirshift` should be called with two arguments:
* `transformerPath`: A path to a transformer
* `itemPaths`: An array of paths to attempt to transform.

The paths will be looped through, and a directory object will be created for each one.
Once created the transformers default export will be called and provided with the single argument of this directory object.

If the transformer throws an error that is reported via the `errors` property of the `dirshift` return, otherwise if no error is thrown it is assumed the directory matches the expected structure.

The directory object will look like so:

```json
{
  "name": "root",
  "type": "directory",
  "children": [
    {
      "name": "dir1",
      "type": "directory",
      "children": [
        {
          "name": "file1.txt",
          "type": "file"
        },
        {
          "name": "file2.txt",
          "type": "file"
        }
      ]
    },
    {
      "name": "dir2",
      "type": "directory",
      "children": []
    }
  ]
}
```
