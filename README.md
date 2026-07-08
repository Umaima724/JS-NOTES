# JavaScript Notes

# Async (Asynchronous Programming)

## What is Async?

Asynchronous programming allows JavaScript to start a task and continue executing other code instead of waiting for that task to finish.

Example:
- Fetching data from an API
- Reading a file
- Waiting for a timer (`setTimeout`)

---

## JavaScript is (by Default)

- **Synchronous**
  - Executes code one line at a time.
  - The next line waits until the current line finishes.

- **Single-Threaded**
  - JavaScript has a single call stack.
  - It can execute only one task at a time.

---

## Execution Context

JavaScript executes code in an **Execution Context**, where it:

1. Executes one line of code at a time.
2. Creates memory for variables and functions.
3. Runs code in the order it appears.

Example:

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```
First
Second
Third
```

---

## Blocking vs Non-Blocking Code

| Blocking Code | Non-Blocking Code |
|---------------|-------------------|
| Blocks the execution of the program until the task finishes. | Does not block execution while waiting for a task to complete. |
| Executes tasks one after another. | Allows other code to continue running. |
| Usually synchronous. | Usually asynchronous. |

### Blocking Example

```javascript
const data = readFileSync("file.txt");
console.log(data);
console.log("Done");
```

The program waits until the file is completely read before moving to the next line.

---

### Non-Blocking Example

```javascript
readFile("file.txt", (data) => {
    console.log(data);
});

console.log("Done");
```

Output:

```
Done
(file contents appear later)
```

JavaScript continues executing while the file is being read in the background.

---

## Summary

- JavaScript is **single-threaded**.
- JavaScript is **synchronous by default**.
- It executes **one line of code at a time**.
- **Blocking code** stops execution until a task is complete.
- **Non-blocking code** allows other code to run while waiting.
- Asynchronous programming makes JavaScript fast and responsive.