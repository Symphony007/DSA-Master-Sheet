import { Lang } from "@/types";

// Each section maps to { py, ja, cp } — arrays of topics to study before starting.
// These are conceptual topics, not syntax references.

export type LearnBeforeContent = Record<Lang, string[]>;
export type LearnBeforeMap = Record<string, LearnBeforeContent>;

const learnBefore: LearnBeforeMap = {

  // ── Section 1 · Arrays — Hash Maps & Basic Traversal ──────────────────────
  s1: {
    py: [
      "Understand how Python lists work internally — dynamic arrays, contiguous memory, and why indexing is O(1) but insertion at the front is O(n)",
      "Study Python's dict — how it uses hashing internally, why average lookup is O(1), and what causes hash collisions",
      "Study Python's set — when to use it over a dict, and why membership checks are O(1)",
      "Learn Big-O notation deeply: O(1), O(n), O(n²), O(log n) — be able to look at any loop and state its complexity",
      "Understand the 'frequency counting' pattern — using a dict to count occurrences is one of the most common array tricks",
      "Study amortized complexity — why appending to a Python list is O(1) amortized even though it occasionally resizes",
      "Understand Kadane's Algorithm conceptually — the idea of tracking a 'current running sum' and resetting when it goes negative",
    ],
    ja: [
      "Study how arrays work in Java — the difference between int[] (fixed primitive array) and ArrayList<Integer> (dynamic, boxed)",
      "Understand Java's HashMap<K,V> — how it hashes keys, handles collisions via chaining, and why average get/put is O(1)",
      "Study HashSet<T> — when to use it over a list for duplicate detection, and its relationship to HashMap internally",
      "Learn Big-O notation: O(1), O(n), O(n²), O(log n) — practice deriving complexity from nested loops",
      "Understand autoboxing in Java — why int and Integer are different, and the subtle performance cost of boxing in collections",
      "Study amortized complexity — ArrayList.add() is O(1) amortized because array doubling is rare",
      "Understand Kadane's Algorithm conceptually — maintaining a local max and a global max through a single pass",
    ],
    cp: [
      "Understand how C++ vectors work — dynamic arrays backed by contiguous memory, and why random access is O(1) but front-insertion is O(n)",
      "Study unordered_map<K,V> — hash-based, average O(1) lookup; understand when worst-case degrades to O(n) and how to avoid it",
      "Study unordered_set<T> — O(1) insert/lookup for membership checking, and when to prefer it over a sorted set",
      "Learn Big-O notation: be able to derive complexity from any loop structure, including amortized analysis",
      "Understand the STL iterator model — knowing how range-based for loops work helps avoid off-by-one errors",
      "Study amortized complexity — vector push_back is O(1) amortized due to capacity doubling strategy",
      "Understand Kadane's Algorithm conceptually — the key insight is that a negative prefix sum is always worth discarding",
    ],
  },

  // ── Section 2 · Strings — Basic Manipulation ──────────────────────────────
  s2: {
    py: [
      "Understand string immutability in Python — every 'modification' creates a new string, so repeated concatenation in a loop is O(n²). Learn why joining a list is O(n)",
      "Study Unicode basics — why characters can be more than one byte, and why len() measures characters not bytes",
      "Learn the two-pointer technique on strings — one pointer from each end moving inward, useful for palindrome checks",
      "Understand the 'expand around center' technique for palindromes — treating each character (and gap) as a potential center",
      "Study Python's collections.Counter — how it counts characters in O(n) and supports set-like operations on frequencies",
      "Learn when to use a frequency array (int[26]) vs a hash map — frequency arrays are faster for lowercase-letter-only problems",
      "Understand string slicing and its O(k) cost — slicing s[i:j] copies k characters, it is not free",
    ],
    ja: [
      "Understand why String is immutable in Java — and why you must use StringBuilder for any string built in a loop",
      "Study the difference between == and .equals() for strings — == compares references, .equals() compares content",
      "Learn StringBuilder's append() and its amortized O(1) cost — understand how it avoids repeated allocation",
      "Study character operations in Java: char arithmetic, Character utility methods (isLetter, isDigit, toLowerCase)",
      "Understand the two-pointer technique on char arrays — often more efficient than working with String directly",
      "Learn the 'expand around center' approach for palindromes — two variants: odd-length and even-length centers",
      "Study frequency counting with int[26] for lowercase-only problems vs HashMap<Character,Integer> for general input",
    ],
    cp: [
      "Understand that std::string is mutable in C++ — you can modify characters in place, unlike Java or Python",
      "Study the cost of string concatenation with += in a loop — prefer building into a vector<char> or using reserve()",
      "Learn the two-pointer technique on std::string — direct index manipulation is idiomatic in C++",
      "Study character classification functions from <cctype> — isalpha, isdigit, tolower, toupper",
      "Understand the 'expand around center' palindrome technique — recognize odd vs even length cases",
      "Learn frequency arrays: int freq[26] = {} — prefer this over unordered_map for lowercase-letter problems (cache-friendly)",
      "Study std::string methods: find(), substr(), compare() — and their time complexities",
    ],
  },

  // ── Section 3 · Binary Search — Intro ────────────────────────────────────
  s3: {
    py: [
      "Deeply understand the core invariant of binary search — at every step, the answer must lie within [lo, hi]. Never violate this.",
      "Study why binary search requires sorted or monotonic data — understand what 'monotonic' means in the context of a boolean predicate",
      "Learn the two common templates: closed interval [lo, hi] with lo <= hi, and half-open [lo, hi) with lo < hi — pick one and master it",
      "Understand off-by-one errors in binary search — trace through small examples (arrays of size 1, 2, 3) by hand",
      "Study Python's bisect module — bisect_left and bisect_right — understand what they return and when to use each",
      "Understand why mid = (lo + hi) // 2 works in Python (arbitrary precision integers) but can overflow in other languages",
      "Learn the concept of 'binary search on the answer space' — when the answer itself is a number you can binary search over",
    ],
    ja: [
      "Deeply understand the core invariant — at every step, the answer lies within [lo, hi]. Every template choice follows from this.",
      "Study why integer overflow occurs with (lo + hi) / 2 in Java — understand why lo + (hi - lo) / 2 is safe",
      "Learn both binary search templates and commit to one: closed interval while(lo<=hi) vs half-open while(lo<hi)",
      "Understand Arrays.binarySearch() — its return value convention (negative index for missing) and when NOT to use it in interviews",
      "Study the concept of a monotonic predicate — binary search applies whenever you have a yes/no function that flips exactly once",
      "Trace through small examples by hand — arrays of size 1, 2, and 3 — to verify your template handles edge cases",
      "Learn 'binary search on the answer' — defining a feasibility function and searching over the answer range",
    ],
    cp: [
      "Deeply understand the binary search invariant — the answer must always be within [lo, hi] after every iteration",
      "Study integer overflow: (lo + hi) / 2 can overflow when lo and hi are large ints — always use lo + (hi - lo) / 2",
      "Learn C++ STL binary search functions: lower_bound, upper_bound, equal_range — understand their iterator semantics",
      "Study both templates (closed and half-open interval) and choose one — inconsistency is the main source of bugs",
      "Understand the monotonic predicate concept — any bool function that goes false→true or true→false once is binary-searchable",
      "Practice tracing small cases by hand to verify your lo/hi update and termination condition are correct",
      "Learn 'binary search on the answer' — when to set lo/hi as the answer range and write a separate feasibility checker",
    ],
  },

  // ── Section 4 · Stacks & Queues ───────────────────────────────────────────
  s4: {
    py: [
      "Understand the Stack (LIFO) and Queue (FIFO) abstract data types — study why the ORDER of operations matters for each",
      "Study why collections.deque is preferred over list for queues in Python — O(1) popleft vs O(n) for list.pop(0)",
      "Learn the Monotonic Stack idea conceptually — it maintains a stack where elements are always in increasing (or decreasing) order, and elements that break the order are discarded",
      "Study the 'nearest greater element' pattern — one of the most common monotonic stack applications",
      "Understand when to use a stack vs recursion — a stack can simulate the call stack of any recursive function iteratively",
      "Learn the parentheses matching pattern — push open brackets, validate on close brackets. Understand why this works.",
      "Study the 'histogram area' problem conceptually — understanding why the monotonic stack finds left and right boundaries efficiently",
    ],
    ja: [
      "Understand Stack (LIFO) and Queue (FIFO) as abstract data types — know their operations and time complexities",
      "Study Java's Deque interface — understand why ArrayDeque is preferred over Stack<T> (which is a legacy class with synchronization overhead)",
      "Learn LinkedList vs ArrayDeque as Queue implementations — ArrayDeque is faster in practice due to better cache locality",
      "Understand the Monotonic Stack concept — maintaining order by popping elements that violate it, and why this gives O(n) overall",
      "Study the 'nearest greater/smaller element' pattern — the most fundamental monotonic stack use case",
      "Learn the parentheses matching pattern and its variants — valid parentheses, minimum removals, longest valid substring",
      "Understand how a stack can replace recursion — study the iterative DFS pattern which you will use in trees later",
    ],
    cp: [
      "Understand Stack (LIFO) and Queue (FIFO) as abstract concepts — std::stack and std::queue are container adaptors over deque",
      "Study std::deque vs std::stack vs std::queue — understand that stack and queue are just restricted interfaces over deque",
      "Learn the Monotonic Stack concept — why popping elements that break order still gives O(n) total (amortized: each element pushed/popped once)",
      "Study the 'nearest greater element' pattern — the core monotonic stack application",
      "Understand the parentheses matching pattern — push open brackets, validate type on close bracket",
      "Learn that std::stack gives you LIFO, but when you need both ends (deque behavior for monotonic queue), use std::deque directly",
      "Study the 'histogram largest rectangle' problem idea — understand how it uses a monotonic stack to find left/right boundaries in O(n)",
    ],
  },

  // ── Section 5 · Linked Lists ──────────────────────────────────────────────
  s5: {
    py: [
      "Understand the singly linked list structure deeply — each node holds a value and a pointer to the next node. There is no index-based access.",
      "Study why linked lists have O(1) insert/delete at a known position but O(n) search — contrast this with arrays",
      "Learn the Dummy Head (sentinel node) pattern — understand WHY it eliminates edge cases when inserting or deleting at the head",
      "Study the Fast/Slow pointer (Floyd's) technique — visualise how fast=2x slow causes them to meet at the cycle entry",
      "Understand the three-pointer reversal technique for reversing a linked list — draw it on paper with arrows, not just code",
      "Learn about doubly linked lists — the extra prev pointer gives O(1) deletion when you have a direct reference to a node",
      "Study merge sort on linked lists — understand why it's preferred over quicksort for linked lists (no random access needed)",
    ],
    ja: [
      "Understand singly linked list structure — a chain of ListNode objects where each holds a value and a next reference",
      "Study why linked lists cannot be binary-searched — no random access means you must traverse O(n) to find any element",
      "Learn the Dummy Head pattern — a sentinel ListNode(0) before the real head eliminates null-check edge cases at the front",
      "Study the Fast/Slow pointer technique — understand mathematically why they meet inside a cycle and how to find the entry point",
      "Understand the three-pointer reversal — prev, curr, next — draw the pointer reassignment step by step on paper",
      "Study Java's LinkedList class briefly to understand what a real doubly linked list looks like (though you'll implement your own for interviews)",
      "Learn merge sort on linked lists — splitting at the midpoint using fast/slow, then merging two sorted halves",
    ],
    cp: [
      "Understand the ListNode struct — a value and a raw pointer to the next node. Memory is manually managed (no garbage collector).",
      "Study why linked lists have O(1) insert/delete but O(n) lookup — and when this tradeoff makes sense",
      "Learn the Dummy Head pattern — a stack-allocated sentinel eliminates special-casing the head pointer",
      "Study the Fast/Slow pointer (Floyd's cycle detection) — understand the mathematical proof of why they meet inside a cycle",
      "Understand the three-pointer reversal — prev, curr, next — and why you must save next before overwriting curr->next",
      "Study smart pointers briefly — in production C++ you'd use unique_ptr, but raw pointers are standard in interview problems",
      "Learn merge sort on linked lists — preferred because it only requires sequential access, no index needed",
    ],
  },

  // ── Section 6 · LRU Cache (Design Bridge) ────────────────────────────────
  s6: {
    py: [
      "Study the LRU (Least Recently Used) eviction policy — understand the problem: finite cache, on miss evict the least recently used entry",
      "Understand why a hash map alone isn't enough — it gives O(1) access but O(n) to find and evict the least recently used",
      "Understand why a doubly linked list alone isn't enough — O(1) eviction at the tail but O(n) to find a specific key",
      "Study how combining both structures solves the problem — the hash map gives O(1) access to any node, the DLL gives O(1) reorder/eviction",
      "Learn the 'move to front on access' operation — every get and put should move the accessed node to the head of the DLL",
      "Study Python's collections.OrderedDict — understand that it maintains insertion order and supports move_to_end(). Know how it maps to a DLL+hashmap internally",
      "Understand this design pattern broadly — hash map + ordered structure is a recurring combo in system design (caches, rate limiters, etc.)",
    ],
    ja: [
      "Study the LRU eviction policy — what it means, why it's used in CPU caches and database buffer pools",
      "Understand the fundamental constraint: get and put must both be O(1). This rules out most single data structures.",
      "Study why HashMap + DoublyLinkedList achieves O(1) for all operations — the map stores key→node, the DLL maintains recency order",
      "Understand the Dummy Head and Dummy Tail pattern in the DLL — they eliminate null checks at both ends during node removal",
      "Learn the two core operations: remove a node from anywhere in O(1) (using the prev/next pointers), and insert at the front in O(1)",
      "Study Java's LinkedHashMap — it implements LRU when constructed with accessOrder=true. Know it exists, but implement from scratch in interviews",
      "Understand the broader design pattern: any problem requiring O(1) access + O(1) ordered eviction likely needs this combination",
    ],
    cp: [
      "Study the LRU eviction policy and its real-world applications — CPU caches, OS page replacement, web server caches",
      "Understand why O(1) for both get and put rules out simple structures — a list alone is O(n) lookup, a map alone is O(n) eviction",
      "Study how unordered_map + std::list achieves O(1) everything — the map stores key→iterator, the list maintains recency order",
      "Understand std::list's splice() operation — it moves a node to another position in O(1) without reallocation. This is the key C++ trick.",
      "Learn why storing list iterators in the map is safe — std::list iterators are not invalidated by insertions or deletions elsewhere in the list",
      "Understand the broader pattern: unordered_map + std::list is C++'s idiomatic LRU. Know the underlying reason, not just the implementation.",
      "Study this as a template for other O(1) design problems — LFU cache, browser history, etc.",
    ],
  },

  // ── Section 7 · Binary Search — Applied ──────────────────────────────────
  s7: {
    py: [
      "Study rotated sorted arrays — understand that rotation splits the array into two sorted halves, and exactly one half will always be 'clean'",
      "Learn the key rotated array insight: by comparing arr[lo] and arr[mid], you can always determine which half is sorted",
      "Understand 2D matrix binary search — study how a sorted matrix can be treated as a flattened 1D array, and how to convert a 1D index back to (row, col)",
      "Study 'binary search on the answer' deeply — the pattern: define a feasibility function, prove it is monotonic, then binary search over the answer range",
      "Learn to identify when a problem is a 'binary search on answer' problem — keywords: minimise the maximum, maximise the minimum, find the smallest k such that...",
      "Understand why duplicate elements break the rotated array logic — study how Search in Rotated Array II degrades to O(n) in the worst case",
      "Review the Kth smallest / Kth largest concept — understand the connection between binary search on answer and counting elements ≤ mid",
    ],
    ja: [
      "Study rotated sorted arrays — understand that rotation preserves the two-halves structure, and one half is always cleanly sorted",
      "Learn the critical insight: arr[lo] <= arr[mid] means the left half is sorted; otherwise the right half is sorted. Use this to decide which side to search.",
      "Understand 2D matrix binary search — model the matrix as a virtual 1D array of length m*n. Convert index i to row=i/cols, col=i%cols.",
      "Study 'binary search on the answer' as a template — write a separate boolean feasibility function, verify it is monotonic, then binary search",
      "Practice identifying BS-on-answer problems — 'minimum maximum', 'smallest feasible X', 'capacity to achieve Y in D steps' are classic phrasings",
      "Understand Kth smallest in a sorted matrix — the connection between counting elements ≤ mid and binary searching on the answer",
      "Review integer overflow safety — when computing mid in answer-space BS, the answer can be large, always use long",
    ],
    cp: [
      "Study rotated sorted arrays — exactly one of the two halves is cleanly sorted after rotation. This is the invariant your solution relies on.",
      "Learn to determine which half is sorted by comparing arr[lo] and arr[mid] — this single comparison drives the entire search decision",
      "Understand 2D matrix binary search — treat as 1D array; int row = mid/cols, col = mid%cols gives you the matrix index",
      "Study 'binary search on the answer' — write a separate feasibility lambda, verify monotonicity, then search over [lo_answer, hi_answer]",
      "Practice recognising the pattern — 'minimise the maximum value', 'find the smallest k satisfying condition X' always suggest BS on answer",
      "Understand the staircase search for Search in Matrix II — start at top-right, move left if too large or down if too small. This is O(m+n), not BS.",
      "Review overflow safety — large answer spaces require long long when multiplying or computing mid in the answer range",
    ],
  },

  // ── Section 8 · Two Pointers (Medium) ────────────────────────────────────
  s8: {
    py: [
      "Deeply understand the two-pointer technique for sorted arrays — the key invariant is that you can eliminate candidates based on the sorted order",
      "Study why sorting is prerequisite — without sorted order, moving a pointer has no predictable effect on the sum",
      "Learn the 3Sum approach: fix one element, reduce to 2Sum on the remaining sorted subarray. Understand how this gives O(n²) overall.",
      "Study deduplication in 3Sum — understand why skipping duplicate values of the fixed element AND the two-pointer elements is necessary for correctness",
      "Understand the Dutch National Flag algorithm — a three-region partition using three pointers. Study the invariants of each region.",
      "Study Floyd's cycle detection again (Find Duplicate Number) — understand why treating array values as 'next pointers' creates a linked list with a cycle",
      "Learn Next Permutation conceptually — understand the lexicographic ordering of permutations and the three-step algorithm to find the next one",
    ],
    ja: [
      "Understand the two-pointer invariant for sorted arrays — moving the left pointer up increases the sum, moving the right pointer down decreases it. This makes the search O(n).",
      "Study why the array must be sorted first — without it, you cannot make a directional decision when the sum is too large or too small",
      "Learn the 3Sum template: sort the array, iterate fixing index i, then use lo=i+1 and hi=n-1 for the inner two-pointer scan",
      "Study duplicate handling in 3Sum — skip duplicate values at every pointer level (outer loop and both inner pointers after a match)",
      "Understand the Dutch National Flag partition — three regions: [0,lo), [lo,mid), [mid,hi], [hi,n). Study the invariants maintained at each step.",
      "Study Floyd's cycle detection in the context of Find Duplicate — indexing into array values creates a functional graph where a duplicate creates a cycle",
      "Learn Next Permutation — understand lexicographic order and the concept of finding the 'next greater' arrangement",
    ],
    cp: [
      "Understand the two-pointer invariant on sorted arrays — the directional decision (move left or right) is determined by whether the current sum is too large or too small",
      "Study why sorting is essential — O(n log n) sort + O(n) two-pointer scan = O(n log n) total, far better than O(n²) nested loops",
      "Learn the 3Sum template: sort, outer loop fixes i, inner two-pointer scans [i+1, n-1]. Deduplication is critical.",
      "Study deduplication — use while(lo < hi && arr[lo] == arr[lo-1]) lo++ style skipping after each valid triplet is found",
      "Understand Dutch National Flag — three-way partition, O(n) time O(1) space. Study the exact invariants of each pointer.",
      "Study Floyd's cycle detection reapplied — treating array values as pointers creates a rho-shaped path. The duplicate is the cycle entry point.",
      "Learn std::next_permutation in STL — understand what it does conceptually, then implement manually for interviews",
    ],
  },

  // ── Section 9 · Sliding Window ────────────────────────────────────────────
  s9: {
    py: [
      "Understand the sliding window as a two-pointer technique where both pointers move in the same direction — this gives O(n) instead of O(n²) for subarray problems",
      "Study the expand-and-shrink mental model: expand the right pointer to include more elements, shrink the left pointer to restore a violated constraint",
      "Understand why both pointers only move forward — this is the key amortised argument that gives O(n) overall",
      "Learn fixed-size windows — the window size is constant, so you advance both pointers together and maintain a running state",
      "Study variable-size windows — you seek the minimum or maximum window satisfying some condition. The condition determines when to shrink.",
      "Learn the 'at most K distinct' technique — a common variable-window subproblem used to count subarrays with exactly K distinct elements",
      "Study the monotonic deque (collections.deque) for sliding window maximum — understand how it maintains the maximum of the current window in O(1) per step",
    ],
    ja: [
      "Understand the sliding window as an optimised brute force — instead of recomputing the window from scratch each time, maintain a running state",
      "Study the expand-right / shrink-left pattern — right expands unconditionally, left shrinks when a constraint is violated",
      "Understand amortised O(n) — each element is added and removed from the window at most once, so total work is O(n)",
      "Learn fixed-size window implementation — when the window exceeds size k, remove the leftmost element and slide",
      "Study variable-size window for minimum subarray problems — maintain a condition and shrink aggressively while it holds",
      "Learn to use HashMap or int[26] as the window state — frequency maps inside the window are the most common sliding window data structure",
      "Study the monotonic deque for sliding window maximum — ArrayDeque used as a deque, maintaining a decreasing sequence of values",
    ],
    cp: [
      "Understand the sliding window optimisation — instead of O(n²) nested loops recomputing subarrays, maintain state incrementally for O(n)",
      "Study the expand-shrink mental model — for loop on right pointer, while loop inside for shrinking the left when constraint is violated",
      "Understand the amortised O(n) argument — each element is pushed and popped from the window state at most once",
      "Learn fixed-size windows — maintain a running sum/count and subtract the element leaving the back of the window",
      "Study variable-size windows — the shrink condition and how to update the answer (min window, max window, etc.)",
      "Learn unordered_map<char,int> for character frequency windows — practice the 'window contains all required characters' pattern",
      "Study the monotonic deque for sliding window maximum — std::deque<int> storing indices, maintaining a front-max invariant",
    ],
  },

  // ── Section 10 · Prefix Sum & Intervals ──────────────────────────────────
  s10: {
    py: [
      "Understand prefix sums as a precomputation trick — build an array where prefix[i] = sum of all elements before index i, enabling O(1) range sum queries",
      "Study the range sum formula deeply — sum(i,j) = prefix[j+1] - prefix[i]. Understand why the indices work this way with 1-indexed prefix arrays.",
      "Learn the 'subarray sum equals K' pattern — rearranging prefix[j] - prefix[i] = K into prefix[i] = prefix[j] - K enables a hash map lookup",
      "Study prefix sums modulo a number — understand why prefix[j] % k == prefix[i] % k means the subarray [i,j] sums to a multiple of k",
      "Understand 2D prefix sums — how to build a 2D prefix table and use inclusion-exclusion to query any rectangle in O(1)",
      "Study interval merging — sort by start time, then scan linearly merging overlapping intervals. Understand the one comparison that decides if two intervals overlap.",
      "Learn the greedy interval scheduling insight — sort by end time to maximise the number of non-overlapping intervals",
    ],
    ja: [
      "Understand prefix sums — a precomputed array where prefix[i] stores the sum of all elements from index 0 to i-1, enabling O(1) range queries",
      "Study the range sum formula: sum(l, r) = prefix[r+1] - prefix[l]. Build the prefix array with size n+1 to simplify index handling.",
      "Learn the subarray sum equals K pattern — rearranging the prefix difference equation lets you use a HashMap<Integer,Integer> for one-pass counting",
      "Study prefix sums with modulo — prefix[j]%k == prefix[i]%k is the condition for a subarray to be divisible by k",
      "Understand 2D prefix sums — build a (m+1)×(n+1) table; query any rectangle in O(1) using inclusion-exclusion",
      "Study interval merging — sort by start, use a result list, extend the last interval if the current one overlaps",
      "Learn the interval scheduling insight — sorting by end time and greedily accepting non-overlapping intervals maximises the count",
    ],
    cp: [
      "Understand prefix sums — build vector<int> pre(n+1, 0) where pre[i] = pre[i-1] + arr[i-1], enabling O(1) range queries after O(n) build",
      "Study the range sum formula — sum(l, r) = pre[r+1] - pre[l]. Practice deriving it from first principles.",
      "Learn the subarray sum equals K reduction — store prefix sums in unordered_map<int,int> to count subarrays in one pass",
      "Study modular prefix sums — pre[j]%k == pre[i]%k means sum of (i,j) is divisible by k. Handle negative modulo carefully.",
      "Understand 2D prefix sums — vector<vector<int>> pre(m+1, vector<int>(n+1, 0)); standard inclusion-exclusion rectangle query",
      "Study interval merging — sort by start using a lambda comparator, then a linear scan with a results vector",
      "Learn greedy interval scheduling — sort by end, maintain last accepted end time, greedily pick non-overlapping intervals",
    ],
  },

  // ── Section 11 · Recursion Warm-Up ───────────────────────────────────────
  s11: {
    py: [
      "Understand the call stack — every function call adds a frame, every return removes one. Draw call stack frames on paper before writing recursive code.",
      "Study the anatomy of a recursive function: (1) base case — when to stop, (2) recursive case — break problem into smaller version, (3) return value — what to pass up",
      "Implement factorial, fibonacci, and power(x,n) recursively from scratch. Do not look anything up. Trace the calls by hand.",
      "Understand why naive fibonacci is O(2^n) — draw the recursion tree and count the repeated subproblems. This motivates memoisation.",
      "Study memoisation as a technique — caching the return value of a function call so repeated calls with the same argument return instantly",
      "Understand Python's recursion limit (~1000 by default) and why deep recursion can cause a stack overflow",
      "Learn to identify recursion patterns: 'solve for n using solve for n-1', 'divide array in half and solve each half', 'explore all choices and combine results'",
    ],
    ja: [
      "Understand the call stack deeply — each method call creates a stack frame containing local variables and the return address. Draw this on paper.",
      "Study the three components of every recursive function: base case, recursive call with a smaller input, and how the return value propagates upward",
      "Implement factorial, fibonacci, and power(x,n) from scratch in Java. Trace call stacks on paper for factorial(4) and fibonacci(5).",
      "Understand exponential time in naive recursion — draw the fibonacci recursion tree to see why O(2^n) problems need memoisation",
      "Study top-down memoisation in Java — using an int[] or HashMap as a cache, checking before recursing and storing after computing",
      "Understand Java's call stack depth limit — deep recursion (> ~500 frames) causes StackOverflowError. Iterative conversion is sometimes needed.",
      "Learn to classify recursion patterns: linear (factorial), branching (fibonacci, tree traversal), and divide-and-conquer (merge sort, binary search)",
    ],
    cp: [
      "Understand the call stack at a systems level — each recursive call allocates a stack frame; C++ default stack is limited (~1-8 MB depending on OS)",
      "Study the three elements of recursion: base case, recursive step reducing the problem, and the return value passed upward",
      "Implement factorial, fibonacci, and fast power recursively. Trace the call stack frames on paper. Do not skip this.",
      "Understand why naive fibonacci is O(2^n) by drawing the recursion tree and counting recomputed subproblems",
      "Study memoisation in C++ — using std::unordered_map or a vector as a cache to avoid recomputation",
      "Understand stack overflow risk in C++ — deep recursion causes a segfault due to stack size limits. Iterative conversion via explicit stack is important.",
      "Learn to recognise recursion patterns: linear reduction (n→n-1), halving (n→n/2), and multi-branch (tree/graph exploration)",
    ],
  },

  // ── Section 12 · Trees Easy ───────────────────────────────────────────────
  s12: {
    py: [
      "Understand the binary tree structure — a node has a value, a left child, and a right child. Any or all can be None. Trees have no cycles.",
      "Study the three DFS traversal orders: Inorder (L→Node→R), Preorder (Node→L→R), Postorder (L→R→Node). Know by heart what each visits first.",
      "Understand why Inorder traversal of a BST produces a sorted sequence — this property is used in many BST problems",
      "Learn BFS (level-order traversal) using a queue — process all nodes at depth d before moving to depth d+1",
      "Study the 'trust the recursion' mental model — assume your function correctly handles any subtree, then define what you need from left and right subtrees and how to combine them",
      "Understand the two return-value patterns: (1) return a computed value (height, count, diameter), (2) return a boolean (is valid, is same)",
      "Learn Binary Search Tree (BST) properties — for every node, all left subtree values are less, all right subtree values are greater. Learn to exploit this for O(log n) operations.",
    ],
    ja: [
      "Understand the TreeNode class — int val, TreeNode left, TreeNode right. Always handle the null case as your first line.",
      "Study the three DFS traversals: Inorder, Preorder, Postorder. Memorise which is L-Node-R, Node-L-R, and L-R-Node.",
      "Understand why Inorder on a BST produces sorted output — this property makes BST problems much simpler",
      "Learn BFS using a Queue<TreeNode> — offer children when polling a node, process level by level",
      "Study the recursive decomposition model — express the answer for a tree in terms of the answers for its left and right subtrees",
      "Learn to use a global variable (int result = 0 as a class field) for problems like diameter or max path sum where the answer accumulates across recursive calls",
      "Study BST properties — left < root < right for every subtree, not just immediate children. This is a common source of bugs in BST validation.",
    ],
    cp: [
      "Understand the TreeNode struct — int val, TreeNode* left, TreeNode* right. Always check for nullptr before accessing members.",
      "Study the three DFS traversals and their recursive implementations. Know which one produces sorted output for a BST.",
      "Understand BFS using std::queue<TreeNode*> — push children when popping a node, process level by level",
      "Study the recursive decomposition model — express the answer for the current tree in terms of left and right subtree answers",
      "Learn to use a reference parameter or class member as a global accumulator — for problems like diameter, the answer may span across the root",
      "Understand BST invariants carefully — the condition is not just node->val > node->left->val but that ALL left subtree values are less",
      "Study iterative tree traversal using an explicit stack<TreeNode*> — important because very deep trees can cause stack overflow with recursion",
    ],
  },

  // ── Section 13 · Heaps / Priority Queues ─────────────────────────────────
  s13: {
    py: [
      "Understand the heap data structure — a complete binary tree where every parent satisfies the heap property (min-heap: parent ≤ children)",
      "Study how a heap is stored in an array — parent of i is at (i-1)//2, children are at 2i+1 and 2i+2. Understand sift-up and sift-down operations.",
      "Learn why heap push and pop are O(log n) — the heap height is log n, and sift operations traverse at most one path from root to leaf",
      "Understand Python's heapq module — it is a min-heap. For a max-heap, negate values before inserting. Know this limitation.",
      "Study the Top-K pattern — maintain a min-heap of size K. If a new element is larger than the heap minimum, replace it. The heap minimum is the Kth largest.",
      "Understand the Two-Heap pattern for median maintenance — a max-heap for the lower half, a min-heap for the upper half. Balance them to keep sizes equal.",
      "Study heap-based scheduling — problems where you repeatedly process the 'most urgent' or 'most frequent' task use a max-heap as a priority queue",
    ],
    ja: [
      "Understand the min-heap as a complete binary tree satisfying the heap property — the minimum is always at the root",
      "Study how a heap is stored in an array — parent at (i-1)/2, left child at 2i+1, right child at 2i+2",
      "Learn PriorityQueue<T> in Java — it is a min-heap by default. For max-heap, pass Collections.reverseOrder() as the comparator.",
      "Understand O(log n) for offer/poll and O(1) for peek — know why the height of a complete binary tree is log n",
      "Study the Top-K pattern — min-heap of size K; poll when size exceeds K; the minimum remaining is the Kth largest element",
      "Learn the Two-Heap pattern — lower half in a max-heap, upper half in a min-heap. Rebalance after each insertion to keep sizes within 1.",
      "Study custom ordering with Comparator — PriorityQueue<int[]> with lambda comparators for problems where you sort by a secondary key",
    ],
    cp: [
      "Understand the heap as a complete binary tree with the heap property — in a max-heap, every parent is ≥ its children",
      "Study the array representation — parent at (i-1)/2, children at 2i+1 and 2i+2. Understand sift-up (push) and sift-down (pop).",
      "Learn that C++'s std::priority_queue is a MAX-heap by default — opposite of Java and Python. Use greater<int> for a min-heap.",
      "Understand O(log n) push/pop and O(1) top — based on the log n height of a complete binary tree",
      "Study the Top-K pattern — min-heap of size K; pop when size exceeds K; top() gives the Kth largest",
      "Learn the Two-Heap pattern for the median — max-heap for the lower half, min-heap for the upper half, balanced within 1 element",
      "Study custom comparators with priority_queue<T, vector<T>, Comparator> — needed when sorting by a computed key",
    ],
  },

  // ── Section 14 · Trees Medium ─────────────────────────────────────────────
  s14: {
    py: [
      "Study iterative DFS using an explicit stack — every recursive DFS can be converted to an iterative one. This is important for very deep trees.",
      "Understand tree serialisation — converting a tree to a string and back. Study why preorder with null markers uniquely encodes a binary tree.",
      "Learn tree reconstruction from two traversals — given inorder and preorder, the preorder's first element is the root. Use it to split the inorder sequence recursively.",
      "Study path problems in trees — paths from root to leaf, paths through any node. Understand why 'any node' paths require a global maximum and a different return value.",
      "Understand DP on trees — at each node, return multiple values representing different choices (e.g. rob vs skip, include vs exclude). The parent combines them.",
      "Study the BST iterator concept — how to simulate inorder traversal lazily using a stack, so next() is O(h) amortised instead of O(n)",
      "Learn Lowest Common Ancestor (LCA) deeply — for a BST it uses the BST property; for a general tree it uses recursion returning the found nodes",
    ],
    ja: [
      "Study iterative inorder traversal using a Deque<TreeNode> — push the entire left spine, then pop, process, and go right",
      "Learn tree serialisation — preorder with 'null' markers can uniquely encode and decode any binary tree",
      "Understand tree reconstruction — given inorder+preorder, the preorder root splits the inorder into left/right subtrees. Use a HashMap for O(1) index lookup.",
      "Study path sum problems — root-to-leaf vs any-node paths have different implementations. Any-node paths need a class-level max variable.",
      "Understand DP on trees — return int[] from helper functions to carry multiple state values (e.g., {withNode, withoutNode})",
      "Study BST iterator — simulate inorder using a stack. Push left spine initially, pop to get next, then push right child's left spine.",
      "Learn LCA algorithms — BST LCA uses the property that both nodes are in the same subtree; general tree LCA uses post-order recursion",
    ],
    cp: [
      "Study iterative DFS — use stack<pair<TreeNode*, bool>> where the bool indicates if the node has been processed (important for postorder)",
      "Learn tree serialisation — preorder + null markers as a string or vector. Study both BFS-based and DFS-based approaches.",
      "Understand tree construction from traversals — preorder+inorder uniquely defines a binary tree. Use unordered_map for O(1) inorder index lookups.",
      "Study path problems — root-to-leaf paths accumulate a value; any-node paths require passing a reference max value through the recursion",
      "Understand DP on trees — return pair<int,int> or struct from helper to represent multiple computed values per node",
      "Learn the BST iterator pattern — simulated inorder using an explicit stack; push left spine, pop and yield, then push next left spine",
      "Study LCA — binary lifting for general LCA (advanced), or the simpler recursive O(n) approach for interview settings",
    ],
  },

  // ── Section 15 · Backtracking ─────────────────────────────────────────────
  s15: {
    py: [
      "Understand backtracking as a systematic way to explore a decision tree — at each step you make a choice, recurse into it, and then undo the choice",
      "Study the three-step template: Choose → Explore → Unchoose. The 'Unchoose' step (undoing) is what separates backtracking from plain recursion.",
      "Learn to draw the decision tree BEFORE writing code — for subsets, each element is either included or excluded. For permutations, each position tries all remaining elements.",
      "Understand pruning — cutting off branches of the decision tree that cannot possibly lead to a valid solution. This is the primary optimisation technique.",
      "Study the three canonical problems: Subsets (all 2^n subsets), Permutations (all n! orderings), Combination Sum (combinations with repetition). Understand the structural difference.",
      "Learn deduplication for Subsets II and Permutations II — sort the input first, then skip duplicate values at the same decision level using a seen check",
      "Understand grid backtracking — marking a cell as visited before recursing and unmarking it after. This is the 'Unchoose' step applied to a 2D grid.",
    ],
    ja: [
      "Understand backtracking as depth-first search on an implicit decision tree — you build a candidate solution incrementally and abandon it when it cannot be valid",
      "Study the Choose-Explore-Unchoose template — the undo step after the recursive call is essential. Without it, your state accumulates incorrectly across branches.",
      "Learn to always add a COPY of the current path to results, not the reference — res.add(new ArrayList<>(curr)) is a classic Java gotcha",
      "Understand pruning — an early return when a constraint is violated eliminates entire subtrees and can turn exponential into practical runtimes",
      "Study the three canonical forms: Subsets (each element in or out), Combinations (ordered selection without repetition), Permutations (all orderings)",
      "Learn deduplication — sort input first, then use if(i > start && candidates[i] == candidates[i-1]) continue to skip duplicate branches at the same level",
      "Study grid backtracking — visited state must be set before recursing and unset after. The grid IS the state, so you modify it in place.",
    ],
    cp: [
      "Understand backtracking as DFS on a decision tree — build a candidate incrementally, explore children, undo the last step, and try the next choice",
      "Study the Choose-Explore-Unchoose pattern — always call curr.push_back(choice) before recursing and curr.pop_back() after. Never skip the undo step.",
      "Learn to always copy the current path when adding to results — res.push_back(curr) copies by value in C++, so this is safe (unlike Java where you must use new ArrayList)",
      "Understand pruning — add an early return or a loop bound condition to cut off branches that cannot lead to valid answers. Essential for hard problems like Sudoku.",
      "Study the three canonical forms: Subsets, Combinations, Permutations — each has a different loop structure and start index management",
      "Learn deduplication — sort input, then use if(i > start && candidates[i] == candidates[i-1]) continue to avoid duplicate branches at the same recursion level",
      "Study grid backtracking — mark cells in-place before recursing (board[r][c] = '#') and restore after (board[r][c] = original). Clean and cache-efficient.",
    ],
  },

  // ── Section 16 · Greedy ───────────────────────────────────────────────────
  s16: {
    py: [
      "Understand the greedy paradigm — at every step, make the choice that looks best right now and commit to it. Never reconsider past choices.",
      "Study the exchange argument — the standard proof technique for greedy correctness. Assume an optimal solution differs from greedy; show that swapping any differing choice toward the greedy choice cannot worsen the result.",
      "Learn greedy interval scheduling — sort intervals by end time. Greedily select each interval if it doesn't overlap the last selected. Understand WHY end-time sorting maximises selections.",
      "Study the Jump Game greedy insight — track the furthest reachable index as you scan left to right. If current index exceeds max reach, you're stuck.",
      "Understand when greedy fails — greedy does not work when local choices have global consequences (e.g. coin change with arbitrary denominations). These need DP.",
      "Learn the 'task scheduling' greedy pattern — sort by frequency, greedily assign most-frequent tasks first to minimise idle time",
      "Study greedy with sorting — almost every greedy algorithm requires a specific sort order first. Identify what to sort by and why before coding.",
    ],
    ja: [
      "Understand the greedy principle — commit to the locally optimal choice at each step and trust it leads to a global optimum",
      "Study the exchange argument proof — assume greedy differs from optimal at some step; show that swapping toward greedy doesn't worsen the result. This is the formal justification.",
      "Learn interval scheduling greedy — sort by end time, greedily pick non-overlapping intervals. End-time sorting maximises the number of selected intervals.",
      "Study Jump Game — maintain maxReach as you scan. If i > maxReach, return false. The greedy insight: always extend as far as possible.",
      "Understand greedy failure modes — arbitrary coin denominations, weighted path problems, partition problems. These require DP.",
      "Learn task scheduling — conceptually, interleave the most frequent tasks first, placing cooldown gaps around them",
      "Study greedy sorting strategies — by end time for intervals, by frequency for scheduling, by value/weight ratio for fractional knapsack",
    ],
    cp: [
      "Understand the greedy paradigm — make the locally optimal choice at each step and prove that this leads to a global optimum",
      "Study the exchange argument — the standard correctness proof. If any non-greedy solution exists, show you can transform it into the greedy solution without loss.",
      "Learn interval scheduling — sort by end time using a lambda, scan linearly keeping a 'last end' tracker. Provably optimal via exchange argument.",
      "Study Jump Game — maintain an int maxReach variable. The greedy insight is that you always want to extend your reach as far as possible.",
      "Understand when greedy is wrong — arbitrary coin systems, general subset-sum problems, weighted scheduling. Switch to DP in these cases.",
      "Learn task scheduling — model as a frequency-sorted problem; use a max-heap to always schedule the most frequent remaining task",
      "Study sort-based greedy — std::sort with a custom comparator is usually the first line of any greedy solution. The comparator encodes the greedy choice.",
    ],
  },

  // ── Section 17 · DP Wave 1 ────────────────────────────────────────────────
  s17: {
    py: [
      "Understand dynamic programming as 'recursion with memory' — DP avoids recomputing subproblems by storing their results",
      "Study the two DP styles: top-down (memoisation — recursion + cache) and bottom-up (tabulation — fill an array iteratively). Understand the trade-offs.",
      "Learn to always define dp[i] precisely in English BEFORE writing any code — 'dp[i] is the minimum cost to reach step i' is a complete definition",
      "Study the recurrence relation — the equation that expresses dp[i] in terms of previously computed dp values. Derive it from the problem definition, not from intuition.",
      "Understand base cases — the smallest subproblems that can be answered directly without recursion. Wrong base cases cause wrong answers even with correct recurrences.",
      "Study Longest Increasing Subsequence (LIS) — the O(n²) DP approach and the O(n log n) patience sorting approach using binary search",
      "Learn Longest Common Subsequence (LCS) — the classic 2D DP problem. Understand how the recurrence captures the choice of matching or skipping characters.",
    ],
    ja: [
      "Understand DP as memoised recursion — you've already solved smaller subproblems; now look them up instead of recomputing",
      "Study top-down vs bottom-up: top-down uses recursion + HashMap/array cache; bottom-up uses iterative loops filling a dp array from small to large",
      "Learn to define dp[i] in plain English before writing code — an unclear definition leads to an unclear recurrence and a wrong solution",
      "Study the recurrence relation derivation — ask 'what decisions can lead me to state i?' and express dp[i] as the optimal combination of those",
      "Understand base cases — dp[0] and dp[1] for linear problems; dp[i][0] and dp[0][j] for 2D problems. Set them first.",
      "Study LIS — O(n²) DP where dp[i] = length of LIS ending at index i. Then learn the O(n log n) patience sort approach.",
      "Learn LCS — 2D DP where dp[i][j] = LCS of first i chars of s1 and first j chars of s2. The recurrence has two cases: match and no-match.",
    ],
    cp: [
      "Understand DP as 'optimal substructure + overlapping subproblems' — if a problem has both properties, DP applies",
      "Study top-down with memoisation (unordered_map or vector<int>(n,-1)) vs bottom-up tabulation with a dp array",
      "Always define dp[i] precisely before coding — 'dp[i] = maximum sum of a subarray ending at index i' is an example of a complete definition",
      "Study recurrence derivation — look at what choices lead to state i and take the optimal one. Write the recurrence on paper first.",
      "Understand base case initialisation — off-by-one errors in base cases are the most common DP bug. Trace through small inputs.",
      "Study LIS in two ways: O(n²) DP (dp[i] = max LIS ending here) and O(n log n) using lower_bound on a patience-sort array",
      "Learn LCS — vector<vector<int>> dp(m+1,vector<int>(n+1,0)); recurrence: match → dp[i-1][j-1]+1; no match → max(dp[i-1][j],dp[i][j-1])",
    ],
  },

  // ── Section 18 · Graphs ───────────────────────────────────────────────────
  s18: {
    py: [
      "Study graph representations — adjacency list (defaultdict(list)) vs adjacency matrix. Understand when each is appropriate (sparse vs dense graphs).",
      "Understand graph DFS — identical to tree DFS but with a visited set to prevent infinite loops in cycles",
      "Study graph BFS — uses a deque; mark nodes as visited when ENQUEUING not when dequeuing. Understand why the order matters.",
      "Learn multi-source BFS — start BFS from multiple source nodes simultaneously. Used when the question is 'shortest distance to any source node'.",
      "Study Union-Find (Disjoint Set Union) — two operations: find (with path compression) and union (with rank). Near-O(1) per operation with both optimisations.",
      "Learn Topological Sort (Kahn's Algorithm) — compute in-degrees of all nodes, enqueue 0-indegree nodes, repeatedly dequeue and reduce neighbours' in-degrees",
      "Study Dijkstra's algorithm — single-source shortest path for weighted graphs with non-negative edges. Min-heap + distance array. Understand why negative edges break it.",
    ],
    ja: [
      "Study adjacency list representation — Map<Integer,List<Integer>> adj = new HashMap<>(). This is the standard for all graph problems.",
      "Understand DFS on a graph vs a tree — the visited set (boolean[] or Set<Integer>) prevents revisiting nodes in cyclic graphs",
      "Learn BFS — Queue<Integer> + boolean[] visited. Mark visited when offering to the queue, not when polling. Understand why.",
      "Study multi-source BFS — offer all source nodes to the queue before the BFS loop begins. Distance from any source is computed simultaneously.",
      "Learn Union-Find — int[] parent, rank; find() with path compression (parent[x] = find(parent[x])); union() by rank. Inverse Ackermann amortised complexity.",
      "Study Kahn's topological sort — int[] inDeg; Queue<Integer> for zero in-degree nodes; decrement neighbours, re-enqueue if they reach zero",
      "Learn Dijkstra — PriorityQueue<int[]> sorted by distance; int[] dist = new int[n] initialised to MAX_VALUE; relax neighbours on each extraction",
    ],
    cp: [
      "Study graph representations — vector<vector<int>> adj(n) for unweighted; vector<vector<pair<int,int>>> for weighted. Adjacency list is standard.",
      "Understand DFS on graphs — same structure as tree DFS but with vector<bool> visited(n, false) to avoid revisiting",
      "Learn BFS — queue<int> q; vector<bool> vis(n,false); push source, mark visited, then push unvisited neighbours when popping",
      "Study multi-source BFS — push all sources with initial distance 0 before the BFS loop. This finds shortest distance to any source.",
      "Learn Union-Find — vector<int> parent(n), rank(n,0); find with path compression; union by rank. O(α(n)) amortised per operation.",
      "Study Kahn's topological sort — vector<int> inDeg(n,0); fill from edges; use a queue for zero in-degree nodes; decrement on removal",
      "Learn Dijkstra — priority_queue<pair<int,int>, vector<...>, greater<...>>; vector<int> dist(n, INT_MAX); relax edges greedily by minimum distance",
    ],
  },

  // ── Section 19 · DP Wave 2 ────────────────────────────────────────────────
  s19: {
    py: [
      "Study the 0/1 Knapsack problem deeply — each item can be used at most once. The key insight: iterating capacity backwards prevents using the same item twice.",
      "Learn Unbounded Knapsack — items can be reused. Iterating capacity FORWARDS allows reusing items in the same pass.",
      "Understand the Stock problems as state machine DP — model each day as a transition between states: HOLD (own a stock) and FREE (no stock, can buy). Transitions encode buy/sell/wait.",
      "Study Interval DP — dp[i][j] represents the optimal answer for the subproblem on range [i,j]. Problems are solved by increasing interval length.",
      "Learn the 'burst balloons' insight — think about the LAST balloon to burst in a range, not the first. This avoids dependency on already-burst balloons.",
      "Study Edit Distance as a 2D DP — dp[i][j] = minimum edits to convert s[0..i] to t[0..j]. The three operations map to three transitions: insert, delete, replace.",
      "Understand Russian Doll Envelopes as a disguised LIS — sort by width ascending and height descending, then find LIS by height only",
    ],
    ja: [
      "Study 0/1 Knapsack — define dp[j] = maximum value with capacity j. Iterate items in outer loop, capacity j from W down to w[i] in inner loop (backward to prevent reuse).",
      "Learn Unbounded Knapsack — same dp array but iterate capacity forward (j from w[i] to W), allowing the same item to be counted multiple times",
      "Understand Stock State Machine DP — define hold and free states. At each day: new_hold = max(hold, free - price); new_free = max(free, hold + price). Update simultaneously.",
      "Study Interval DP — outer loop on interval length len from 2 to n; inner loop on start index i; end j = i + len - 1. Fill bottom-up by length.",
      "Learn Edit Distance DP — dp[i][j] = minimum operations. Base cases: dp[i][0]=i (delete all), dp[0][j]=j (insert all). Recurrence: match → dp[i-1][j-1], mismatch → 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
      "Study Regex/Wildcard Matching DP — handle the '*' character carefully; its ability to match zero or more characters creates two transition cases",
      "Understand Russian Doll Envelopes — sort by (width asc, height desc); LIS on heights only. The desc sort prevents using two envelopes with equal width.",
    ],
    cp: [
      "Study 0/1 Knapsack — vector<int> dp(W+1, 0); outer loop over items, inner loop from W down to w[i]. The backward iteration is what enforces at-most-one use.",
      "Learn Unbounded Knapsack — inner loop goes forward from w[i] to W. This allows an item to be 'used again' within the same iteration.",
      "Understand Stock State Machine DP — two variables: hold (have stock) and free (no stock). Update both simultaneously each day to avoid using updated values.",
      "Study Interval DP — fill by increasing length: for(int len=2;len<=n;len++) for(int i=0;i+len-1<n;i++){ int j=i+len-1; /* fill dp[i][j] */ }",
      "Learn Edit Distance — 2D DP; dp[i][j] = min edits to convert s[0..i-1] to t[0..j-1]. Recurrence: s[i]==t[j] → dp[i-1][j-1]; else 1 + min of 3 neighbours.",
      "Study Burst Balloons — think of the last balloon to burst in range [i,j] as the 'k' split point. dp[i][j] = max coins from range [i,j].",
      "Understand Russian Doll Envelopes as LIS on heights after sorting by (w asc, h desc) — use lower_bound for O(n log n) LIS",
    ],
  },

  // ── Section 20 · Bit Manipulation ─────────────────────────────────────────
  s20: {
    py: [
      "Understand the binary representation of integers — how positive and negative numbers are stored in two's complement form",
      "Study XOR properties deeply: a^a=0 (any number XORed with itself is 0), a^0=a (XOR with 0 is identity). These two properties power many 'find the unique element' problems.",
      "Learn the n & (n-1) trick — it clears the lowest set bit. Applying this in a loop counts the number of set bits (popcount) in O(number of set bits).",
      "Understand checking if n is a power of 2: n > 0 and n & (n-1) == 0. There is exactly one set bit in any power of 2.",
      "Study bit masking — using a bitmask to represent a subset of elements. An integer can encode a set of up to 32 booleans.",
      "Learn left shift (<<) and right shift (>>) — left shift by k multiplies by 2^k, right shift by k divides by 2^k (integer division)",
      "Understand Python's arbitrary-precision integers — Python ints don't overflow, but be aware that ~ (bitwise NOT) behaves differently on Python ints vs fixed-width ints",
    ],
    ja: [
      "Study two's complement — Java int is exactly 32 bits, always signed. Understand how negative numbers are represented and how overflow wraps around.",
      "Learn XOR properties: a^a=0 and a^0=a. These make XOR extremely useful for problems asking you to find an element that appears an odd number of times.",
      "Study n & (n-1) — clears the lowest set bit. Integer.bitCount(n) does popcount, but implement manually in interviews.",
      "Understand power-of-two check: n > 0 && (n & (n-1)) == 0. A power of 2 has exactly one bit set.",
      "Learn unsigned right shift in Java (>>>) — >> propagates the sign bit, >>> fills with 0. Important for problems involving negative numbers and bit reversal.",
      "Study bit masking for subset enumeration — an int can represent a subset of 32 items. Useful for bitmask DP in Phase 13+.",
      "Understand the 'carry-less addition' concept behind XOR — XOR is addition in GF(2), which is why it has these algebraic properties",
    ],
    cp: [
      "Study two's complement for both int (32-bit) and long long (64-bit) — understand signed vs unsigned behaviour under shifts",
      "Learn XOR properties: a^a=0, a^0=a. These are algebraic facts about GF(2) arithmetic and drive many bit tricks.",
      "Study n & (n-1) — clears the lowest set bit. Use in a while loop for efficient popcount. __builtin_popcount(n) is a GCC built-in.",
      "Understand n & (-n) — isolates the lowest set bit. Used in Fenwick Trees and some bit tricks.",
      "Learn the power-of-two check: n > 0 && !(n & (n-1)). True if and only if exactly one bit is set.",
      "Study arithmetic vs logical right shift — in C++, right shift of signed integers is implementation-defined (usually arithmetic). Prefer unsigned for bit tricks.",
      "Understand bitmask DP — using an integer to represent a subset (bit i = 1 means element i is included). Enumerate all 2^n subsets as integers 0 to 2^n - 1.",
    ],
  },

  // ── Section 21 · Math ─────────────────────────────────────────────────────
  s21: {
    py: [
      "Study modular arithmetic — (a + b) % m = ((a % m) + (b % m)) % m. This distributes over +, -, ×. Division requires modular inverse (Fermat's little theorem).",
      "Learn the Sieve of Eratosthenes — the standard O(n log log n) algorithm to find all primes up to n. Understand why you only need to check up to √n.",
      "Study GCD via the Euclidean algorithm — gcd(a, b) = gcd(b, a % b). It terminates in O(log(min(a,b))) steps. Understand WHY this works.",
      "Learn fast exponentiation (binary exponentiation) — x^n = (x^(n//2))^2 if n is even. This reduces O(n) multiplications to O(log n).",
      "Study the cycle detection pattern for 'happy number' style problems — a sequence that doesn't terminate must eventually cycle. Floyd's algorithm detects this.",
      "Understand prime factorisation — every integer > 1 has a unique prime factorisation. Knowing this helps with problems about divisors, GCD, and LCM.",
      "Learn counting trailing zeroes in factorials — they come from factors of 10 = 2×5. Since there are always more 2s than 5s, count factors of 5 in n!.",
    ],
    ja: [
      "Study modular arithmetic with long — intermediate products can overflow int in Java. Use (long)a * b % MOD to prevent this.",
      "Learn the Sieve of Eratosthenes — boolean[] isPrime = new boolean[n+1]; mark composites by iterating from p² upward. O(n log log n).",
      "Study Euclidean GCD — recursive: int gcd(int a, int b){ return b==0 ? a : gcd(b, a%b); }. Understand the mathematical justification.",
      "Learn fast power (binary exponentiation) — halve the exponent each step: even n → square the base; odd n → multiply result by base. O(log n).",
      "Understand two's complement edge cases — Integer.MIN_VALUE = -2^31 has no positive counterpart in int. Handle this in problems like Reverse Integer.",
      "Study prime factorisation — iterate from 2 to √n dividing out prime factors. Any remaining factor > √n is itself prime.",
      "Learn the trailing zeroes insight — count floor(n/5) + floor(n/25) + floor(n/125) + ... This is the number of times 5 divides n!",
    ],
    cp: [
      "Study modular arithmetic — use long long for all intermediate products. (long long)a * b % MOD prevents overflow.",
      "Learn the Sieve of Eratosthenes — vector<bool> notPrime(n+1, false); mark from p*p in steps of p. O(n log log n) time and O(n) space.",
      "Study the Euclidean GCD — __gcd(a, b) is available in <algorithm>, but implement manually: int gcd(int a, int b){ return b ? gcd(b, a%b) : a; }",
      "Learn fast power (binary exponentiation) — O(log n): if n is even square the base and halve n; if odd multiply result by base and decrement n.",
      "Understand integer overflow risks — int is 32-bit; products like a*b where a,b ~ 10^9 need long long. Reverse Integer is a classic overflow trap.",
      "Study prime factorisation — trial division up to √n suffices. Any factor remaining after the loop is a prime factor > √n.",
      "Learn trailing zeroes in factorials — count occurrences of 5 as a factor: sum of floor(n/5^k) for k=1,2,... until 5^k > n.",
    ],
  },

  // ── Section 22 · Segment Tree / BIT ──────────────────────────────────────
  s22: {
    py: [
      "Understand the core problem Segment Trees solve — range queries (sum, min, max of [l,r]) AND point updates, both in O(log n). Without a segment tree, one of these would be O(n).",
      "Study the segment tree structure — a complete binary tree where each node stores the aggregate (sum/min/max) of its range. A node for [l,r] has children [l,mid] and [mid+1,r].",
      "Learn the array representation of a segment tree — store it in an array of size 4n. Node at index i has children at 2i and 2i+1.",
      "Understand the Binary Indexed Tree (Fenwick Tree) — a simpler data structure for prefix sum queries + point updates. Uses the binary representation of indices to determine ranges.",
      "Study the BIT update operation — add delta to index i, then propagate to i + (i & -i). The 'lowest set bit' trick determines which parent nodes to update.",
      "Study the BIT query operation — sum prefix [1, i] by iterating i, i - (i & -i), ... until 0. Each step removes the lowest set bit.",
      "Understand when to use BIT vs Segment Tree — BIT is faster and simpler for prefix sum/update; Segment Tree is needed for range updates, range min/max, or lazy propagation.",
    ],
    ja: [
      "Understand the problem Segment Trees solve — prefix sum allows range queries but not efficient updates. A segment tree supports BOTH in O(log n).",
      "Study the tree structure — each node covers a range [l, r]. Leaf nodes cover single elements. Internal nodes store the aggregate of their children's ranges.",
      "Learn the standard implementation: int[] tree = new int[4*n]; build with build(1, 0, n-1); query with query(1, 0, n-1, l, r); update with update(1, 0, n-1, pos, val).",
      "Study the Fenwick Tree (BIT) — an array-based structure where index i is responsible for a range determined by its lowest set bit. Very fast in practice.",
      "Learn BIT update: for(int i=pos; i<=n; i+=i&(-i)) bit[i]+=val — each iteration moves to the next responsible ancestor",
      "Learn BIT query: int s=0; for(int i=pos; i>0; i-=i&(-i)) s+=bit[i] — sum all segments covering [1, pos]",
      "Understand the BIT's limitation — supports point update and prefix query efficiently, but NOT arbitrary range minimum/maximum (use segment tree for those)",
    ],
    cp: [
      "Understand the core trade-off — prefix sums give O(1) range queries but O(n) updates. Segment trees give O(log n) for both.",
      "Study the segment tree recursively — each node [l,r] stores aggregate; children are [l,mid] and [mid+1,r]; leaves are single elements",
      "Learn the standard implementation — vector<int> tree(4*n); build/query/update all take (node=1, l=0, r=n-1) as parameters",
      "Study the Fenwick Tree (BIT) — vector<int> bit(n+1, 0); simpler code than segment tree but limited to prefix-sum style aggregates",
      "Learn BIT update: for(int i=pos; i<=n; i+=i&(-i)) bit[i]+=val — moves through responsible positions using the lowest set bit",
      "Learn BIT query: int s=0; for(int i=pos; i>0; i-=i&(-i)) s+=bit[i] — sums all ranges covering [1, pos]",
      "Understand lazy propagation in segment trees (advanced) — defers range updates by storing a pending operation at each node, applied only when needed",
    ],
  },

  // ── Section 23 · Hard Multi-Pattern Consolidation ─────────────────────────
  s23: {
    py: [
      "Understand that each problem here requires combining 2–3 techniques. Before coding, identify WHICH techniques apply and WHICH sub-problem each technique solves.",
      "Study Eulerian paths and circuits — an Eulerian circuit visits every edge exactly once. Hierholzer's algorithm finds it in O(E). Used in Reconstruct Itinerary.",
      "Learn the sweep line technique — process events (interval starts/ends) in sorted order. Events are processed as you 'sweep' a vertical line from left to right.",
      "Study Segment Tree with Lazy Propagation — when you need range updates (not just point updates) in O(log n), lazy propagation defers the update until necessary.",
      "Understand the 'divide and conquer on merge sort' technique for count inversions / Count of Smaller Numbers — counting during the merge step gives O(n log n).",
      "Review the KMP algorithm for string matching — the failure function encodes the longest proper prefix that is also a suffix. Used for Shortest Palindrome.",
      "Develop problem decomposition skills — for any hard problem, ask: 'what is the bottleneck operation?' and 'what data structure supports that operation efficiently?'",
    ],
    ja: [
      "Understand multi-pattern recognition — for each hard problem, write down the 2–3 sub-problems and which technique handles each before touching code",
      "Study Hierholzer's algorithm for Eulerian path — DFS that backtracks only when all edges from a node are consumed. Result is built in reverse via a stack.",
      "Learn the sweep line algorithm — sort events by position/time, use a heap or sorted set to maintain the active set at each event",
      "Study the merge-sort-based count — counting inversions or smaller elements can be done during the merge step of merge sort in O(n log n)",
      "Learn KMP failure function — lps[i] = length of longest proper prefix of pattern[0..i] that is also a suffix. Enables O(n+m) string matching.",
      "Study TreeMap<Integer,Integer> as an order-statistic structure — floor(), ceiling(), firstKey(), lastKey() in O(log n). Useful for problems requiring ordered dynamic sets.",
      "Practice the habit: after solving each hard problem, write one sentence explaining the core insight — not the algorithm, but the KEY IDEA that makes it tractable.",
    ],
    cp: [
      "Develop multi-pattern decomposition — identify which part of the problem needs which technique. Write this analysis before opening an IDE.",
      "Study Hierholzer's algorithm — iterative DFS using an explicit stack; push neighbours, pop when no unvisited edges remain, build path in reverse",
      "Learn the sweep line technique — sort interval events (start=+1, end=-1) by coordinate; process with a priority_queue or multiset to maintain active intervals",
      "Study merge-sort-based counting — the merge step naturally counts inversions and 'smaller elements after self'. O(n log n) with careful implementation.",
      "Learn KMP — build the lps (prefix function) array in O(m), then match in O(n). The key insight is reusing previously matched prefix information.",
      "Study std::multiset and std::policy_tree (order statistics tree in GCC PBDS) for problems requiring O(log n) rank/select operations",
      "After each hard problem: write the core insight in one line and identify which easier problem it generalises from. This builds pattern recognition faster than volume alone.",
    ],
  },
};

export default learnBefore;