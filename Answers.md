1. What are the order of insertions/removals for the following data structures?
   - **Stack** Stacks are last in, first out. That means that the most recently inserted node is also the first to be removed.
   - **Queue** Queues are first in, first out. That means that the first value inserted into a queue will also be the first to be removed.

2. What is the retreival time complexity for the following data structures?
   - **Linked List** Linear, or `O(n)`
   - **Hash Table** (Near) constant, or `O(1)`
   - **Binary Search Trees** Lograrithmic, or `O(log n)`

3. What are some advantages to using a Hash Tables over an array in JavaScript?

Hash tables allow for (near) constant lookup, whereas in order to find a value in an array, we have to iterate over the array until we find the value, which means at worst lookup is in constant time. The hashing function generates a fingerprint based on the data it's given, and that fingerprint is used as the key to lookup the value that is stored there (as opposed to simply being an index that you increment, which would require iteration).


