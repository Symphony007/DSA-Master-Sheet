import { LearnTopic } from "@/types";

// Each section id maps to an array of LearnTopic objects.
// concept = what to understand | yt = exact YouTube search query
export type LearnBeforeMap = Record<string, LearnTopic[]>;

const learnBefore: LearnBeforeMap = {

  // ── s1 · Arrays — Hash Maps & Traversal ──────────────────────────────────
  s1: [
    {
      concept: "Big O notation — O(1), O(n), O(n²), O(log n). Be able to look at any loop and state its complexity. This is non-negotiable for every problem you solve.",
      yt: "Big O notation for beginners CS Dojo",
    },
    {
      concept: "Python list internals — dynamic arrays, why indexing is O(1) but front-insertion is O(n). Understand amortised O(1) append and what list slicing costs.",
      yt: "Python list time complexity explained",
    },
    {
      concept: "Python dict and set — how hashing gives O(1) average lookup, why membership checks on a set are faster than on a list, and when to use each.",
      yt: "Python dictionary and set internals hashing",
    },
    {
      concept: "Frequency counting pattern — using a dict or Counter to count occurrences is one of the most common array tricks. Study collections.Counter deeply.",
      yt: "Python Counter collections frequency counting leetcode",
    },
    {
      concept: "Kadane's algorithm — track a running sum, reset to 0 when it goes negative. Understand WHY the local maximum is always worth extending until it becomes negative.",
      yt: "Kadane's algorithm maximum subarray Python explained",
    },
  ],

  // ── s2 · Strings ──────────────────────────────────────────────────────────
  s2: [
    {
      concept: "String immutability in Python — every 'modification' creates a new string. Repeated concatenation in a loop is O(n²). Learn why ''.join(list) is O(n) and always preferred.",
      yt: "Python string immutability join list O(n) explained",
    },
    {
      concept: "Two pointer technique on strings — one pointer from each end moving inward. Core pattern for palindrome checks. Understand the invariant before coding.",
      yt: "two pointer technique strings palindrome Python NeetCode",
    },
    {
      concept: "Expand around center for palindromes — treat each character AND each gap as a potential center. Two variants: odd-length and even-length palindromes.",
      yt: "expand around center palindrome Python leetcode 5",
    },
    {
      concept: "String slicing cost — s[i:j] copies (j-i) characters, it is NOT free. Also understand ord() and chr() for character arithmetic in problems.",
      yt: "Python string slicing time complexity ord chr",
    },
  ],

  // ── s3 · Binary Search ────────────────────────────────────────────────────
  s3: [
    {
      concept: "The binary search invariant — at every step, the answer must lie within [lo, hi]. Every template decision follows from this. Derive the template yourself rather than memorising it.",
      yt: "binary search template Python NeetCode explained",
    },
    {
      concept: "Off-by-one errors — lo + (hi - lo) // 2 vs (lo + hi) // 2. Left-inclusive vs right-exclusive ranges. Trace through arrays of size 1, 2, and 3 by hand.",
      yt: "binary search off by one errors Python left right boundary",
    },
    {
      concept: "Binary search on the answer — when the answer itself is a number you can binary search over. The key: define a boolean feasibility function and verify it is monotonic.",
      yt: "binary search on answer explained Koko bananas Python",
    },
    {
      concept: "Python's bisect module — bisect_left and bisect_right, what they return, and when to use each. Good to know even if you implement binary search manually.",
      yt: "Python bisect module tutorial bisect_left bisect_right",
    },
  ],

  // ── s4 · Sliding Window ───────────────────────────────────────────────────
  s4: [
    {
      concept: "Sliding window mental model — expand the right pointer to include more elements, shrink the left pointer to restore a violated constraint. Both pointers only move forward, giving O(n) overall.",
      yt: "sliding window technique Python NeetCode explained",
    },
    {
      concept: "Fixed vs variable window — fixed window has constant size (advance both pointers together). Variable window seeks minimum or maximum size satisfying a condition (expand right, conditionally shrink left).",
      yt: "fixed window vs variable window sliding window Python",
    },
    {
      concept: "Window state with a hash map — most variable window problems track character/element frequencies inside the window. Learn the 'valid window' check pattern.",
      yt: "sliding window hash map character frequency Python",
    },
    {
      concept: "Monotonic deque for sliding window maximum — collections.deque storing indices, maintaining a front-max invariant. Each element is pushed/popped at most once: O(n) total.",
      yt: "monotonic deque sliding window maximum Python collections.deque",
    },
  ],

  // ── s5 · Linked Lists ─────────────────────────────────────────────────────
  s5: [
    {
      concept: "Build a ListNode from scratch — class ListNode: self.val, self.next. Build a 3-node list by hand. Write a print traversal function. Don't start problems until this feels trivial.",
      yt: "linked list Python from scratch implementation ListNode",
    },
    {
      concept: "Python variables are references — a = b.next doesn't copy the node, it copies the reference. Deeply understand this before any pointer reassignment problem.",
      yt: "Python variables references pointers linked list explained",
    },
    {
      concept: "Dummy head (sentinel node) pattern — a fake head node before the real head eliminates null-check edge cases when inserting or deleting at the front of the list.",
      yt: "dummy head node sentinel linked list Python technique",
    },
    {
      concept: "Fast and slow pointer (Floyd's) — visualise how a pointer moving 2x speed must lap a pointer moving 1x speed inside a cycle. Draw this on paper before coding cycle detection.",
      yt: "fast slow pointer Floyd cycle detection Python linked list",
    },
  ],

  // ── s6 · Stacks & Queues ──────────────────────────────────────────────────
  s6: [
    {
      concept: "Stack LIFO vs Queue FIFO — know intuitively which one to reach for. Stack: undo operations, bracket matching, call stack simulation. Queue: BFS, processing in arrival order.",
      yt: "stack queue data structure Python explained LIFO FIFO",
    },
    {
      concept: "Use collections.deque as a queue — never use list.pop(0) as a queue because it's O(n). deque.popleft() is O(1). This matters in BFS.",
      yt: "Python collections deque vs list queue popleft O(1)",
    },
    {
      concept: "Monotonic stack concept — a stack that stays sorted. Elements that violate the order are popped before pushing a new element. Each element is pushed and popped at most once: O(n) total.",
      yt: "monotonic stack explained NeetCode daily temperatures",
    },
    {
      concept: "Next greater element pattern — the anchor problem for monotonic stacks. Understand why traversing right-to-left and using a decreasing stack gives the answer for each element in O(n).",
      yt: "next greater element monotonic stack Python NeetCode",
    },
  ],

  // ── s7 · Recursion & Backtracking ─────────────────────────────────────────
  s7: [
    {
      concept: "The call stack — every recursive call adds a frame, every return removes one. Draw call stack frames on paper for factorial(4) before writing any recursive code.",
      yt: "recursion call stack Python visualization explained",
    },
    {
      concept: "Decision tree mental model — every backtracking problem is a tree where each node is a choice. Draw the full tree for 'all subsets of [1,2,3]' before coding. The tree IS the algorithm.",
      yt: "backtracking decision tree NeetCode subsets permutations",
    },
    {
      concept: "Choose → Explore → Unchoose template — path.append(choice) before recursing, path.pop() after. The pop (undo) step is what makes it backtracking, not plain recursion.",
      yt: "backtracking template Python choose explore unchoose",
    },
    {
      concept: "Deduplication in Subsets II / Permutations II — sort the input first, then skip duplicates at the same decision level using if i > start and nums[i] == nums[i-1]: continue.",
      yt: "backtracking deduplication subsets II Python sorted skip",
    },
    {
      concept: "Python recursion limit is ~1000 by default. For very deep recursion, sys.setrecursionlimit(). Also learn @functools.lru_cache for automatic memoisation of recursive functions.",
      yt: "Python recursion limit sys.setrecursionlimit lru_cache",
    },
  ],

  // ── s8 · Trees — Easy DFS ─────────────────────────────────────────────────
  s8: [
    {
      concept: "Tree terminology cold — root, leaf, height, depth, parent, child. Height = longest path to leaf. Depth = distance from root. These appear in problem statements constantly.",
      yt: "binary tree terminology height depth Python explained",
    },
    {
      concept: "The 3 DFS traversals — Inorder (L→Node→R), Preorder (Node→L→R), Postorder (L→R→Node). Write all three by hand. Inorder of a BST produces sorted output.",
      yt: "tree traversal inorder preorder postorder Python recursive",
    },
    {
      concept: "'Trust the recursion' model — assume your function correctly solves any subtree, then define what you need from left and right subtrees and how to combine them at the current node.",
      yt: "tree recursion trust left right combine Python NeetCode",
    },
    {
      concept: "BST property — left subtree values < node < right subtree values for EVERY subtree, not just immediate children. This is the source of most BST validation bugs.",
      yt: "binary search tree property validation Python BST",
    },
    {
      concept: "BFS level-order using collections.deque — process a node then enqueue its children. Process level by level. This is the exact same template you'll use for graph BFS.",
      yt: "level order traversal binary tree Python BFS deque",
    },
  ],

  // ── s9 · Trees — Medium ───────────────────────────────────────────────────
  s9: [
    {
      concept: "Iterative tree DFS using an explicit stack — every recursive DFS can be converted to iterative. Important when tree depth could trigger a Python recursion limit.",
      yt: "iterative tree traversal stack Python inorder",
    },
    {
      concept: "Path sum problems — root-to-leaf paths accumulate a value top-down. Any-node paths (Path Sum III) require tracking prefix sums in a hash map and a global maximum.",
      yt: "path sum III prefix sum tree Python NeetCode",
    },
    {
      concept: "LCA in a general binary tree — post-order DFS: if a node is p or q, return it. If both children return non-null, current node is the LCA. Understand WHY this works.",
      yt: "lowest common ancestor binary tree Python DFS NeetCode",
    },
    {
      concept: "Tree construction from traversals — given inorder + preorder, the first element of preorder is the root. Use it to split inorder into left/right. Use a dict for O(1) index lookup.",
      yt: "construct binary tree preorder inorder Python NeetCode 105",
    },
    {
      concept: "Python heapq module — min-heap only. For max-heap: push -val, pop and negate. heapq.heappush, heapq.heappop, heapq.heapify. This powers all Top-K problems.",
      yt: "Python heapq module tutorial min heap max heap negate",
    },
  ],

  // ── s10 · Heaps / Priority Queue ──────────────────────────────────────────
  s10: [
    {
      concept: "Heap structure — complete binary tree satisfying the heap property. Min-heap: every parent ≤ children. O(log n) push/pop, O(1) peek at minimum. Stored as an array internally.",
      yt: "heap data structure Python explained min max heap",
    },
    {
      concept: "Top-K pattern — maintain a min-heap of size K. If a new element is larger than the heap minimum, replace it. When the loop ends, the heap minimum is the Kth largest element.",
      yt: "top K elements heap Python pattern NeetCode",
    },
    {
      concept: "Two-heap pattern for median — max-heap for the lower half, min-heap for the upper half. After each insertion, rebalance so sizes differ by at most 1. Median is the top of the larger heap.",
      yt: "two heaps median data stream Python NeetCode 295",
    },
    {
      concept: "heapq with tuples — Python heapq compares tuples lexicographically. Use (frequency, item) or (-val, item) to achieve custom ordering without a comparator class.",
      yt: "Python heapq tuple custom ordering frequency sort",
    },
  ],

  // ── s11 · Graph BFS / DFS ─────────────────────────────────────────────────
  s11: [
    {
      concept: "Graph representations — adjacency list using defaultdict(list) is standard. Know how to build it from an edge list. Adjacency matrix is rarely used in interviews.",
      yt: "graph adjacency list Python defaultdict implementation",
    },
    {
      concept: "Visited set — without tracking visited nodes, BFS/DFS loops forever on cycles. Use a set() for O(1) lookup. In BFS, add to visited WHEN ENQUEUING, not when dequeuing.",
      yt: "BFS visited set when to add Python graph cycle",
    },
    {
      concept: "BFS template — deque → add start → mark visited → while queue: pop left, process, add unvisited neighbours. This exact template works for trees and graphs alike.",
      yt: "BFS graph Python template NeetCode number of islands",
    },
    {
      concept: "Multi-source BFS — add all source nodes to the queue before the loop starts. Distance from any source is computed simultaneously. Used in Rotting Oranges, 01 Matrix.",
      yt: "multi source BFS Python rotting oranges explained",
    },
    {
      concept: "Grid DFS — a 2D grid is a graph where each cell connects to its 4 neighbours. dirs = [(0,1),(0,-1),(1,0),(-1,0)]. Memorise this. Check bounds and visited before recursing.",
      yt: "DFS on grid 2D matrix Python number of islands",
    },
  ],

  // ── s12 · Union-Find & Topological Sort ──────────────────────────────────
  s12: [
    {
      concept: "Union-Find (DSU) — two operations: find (which component?) and union (merge components). Path compression in find and union by rank give near-O(1) per operation.",
      yt: "union find disjoint set Python William Fiset explained",
    },
    {
      concept: "Path compression — parent[x] = find(parent[x]) flattens the tree during find. Union by rank — always attach the smaller tree under the larger. Together: inverse Ackermann time.",
      yt: "union find path compression union by rank Python implementation",
    },
    {
      concept: "Topological sort (Kahn's BFS algorithm) — compute in-degrees, enqueue nodes with 0 in-degree, repeatedly dequeue and decrement neighbours' in-degrees, re-enqueue if they hit 0.",
      yt: "topological sort Kahn's algorithm BFS Python course schedule",
    },
    {
      concept: "Cycle detection in directed graphs — if topological sort processes fewer nodes than total nodes, there is a cycle. This is the cleanest way to detect cycles in directed graphs.",
      yt: "detect cycle directed graph topological sort Python",
    },
  ],

  // ── s13 · DP — 1D, Sequences & Grid ──────────────────────────────────────
  s13: [
    {
      concept: "What makes a problem DP-able — overlapping subproblems (same smaller problem solved repeatedly) + optimal substructure (optimal solution built from optimal sub-solutions). Fibonacci is the canonical example.",
      yt: "dynamic programming for beginners Python NeetCode introduction",
    },
    {
      concept: "Top-down memoisation first — start with recursion, then add @functools.lru_cache(maxsize=None). Easier to think through. 'If I've computed this before, return the cached answer.'",
      yt: "memoization Python lru_cache functools recursive",
    },
    {
      concept: "Bottom-up tabulation — fill a dp[] array from base cases up to the final answer. No recursion overhead. Learn to convert a memoised solution to tabulation.",
      yt: "bottom up dynamic programming tabulation Python array",
    },
    {
      concept: "State definition is 80% of the problem — write dp[i] = '...' in plain English before coding. 'dp[i] is the minimum cost to reach step i' is a complete definition. Vague definitions lead to wrong code.",
      yt: "how to define DP state Python NeetCode problem solving",
    },
    {
      concept: "LIS in two ways — O(n²) DP where dp[i] = length of LIS ending at index i. Then learn the O(n log n) patience sort approach using binary search on a maintained array.",
      yt: "longest increasing subsequence Python O(n log n) binary search",
    },
  ],

  // ── s14 · Knapsack, Stock & Hard DP ──────────────────────────────────────
  s14: [
    {
      concept: "0/1 Knapsack — each item used at most once. Key: iterate capacity backwards (for j in range(W, w-1, -1)) to prevent using the same item twice in one pass.",
      yt: "0/1 knapsack Python Aditya Verma explained",
    },
    {
      concept: "Unbounded Knapsack — items can be reused. Iterate capacity FORWARDS (for j in range(w, W+1)) — this allows an item to be counted multiple times in the same pass.",
      yt: "unbounded knapsack Python coin change explained",
    },
    {
      concept: "Stock state machine DP — model each day as a transition between HOLD (own stock) and FREE (no stock). Update both states simultaneously to avoid using updated values in the same step.",
      yt: "stock state machine DP Python buy sell cooldown",
    },
    {
      concept: "Interval DP — dp[i][j] = optimal answer for range [i,j]. Fill by increasing interval length (outer loop). The 'Burst Balloons' key insight: think about the LAST balloon to burst in a range, not the first.",
      yt: "interval DP burst balloons Python NeetCode explained",
    },
    {
      concept: "Edit Distance DP — dp[i][j] = min edits to convert s[0..i] to t[0..j]. Three operations: insert (dp[i][j-1]+1), delete (dp[i-1][j]+1), replace (dp[i-1][j-1] + (s[i]!=t[j])). Derive this on paper.",
      yt: "edit distance dynamic programming Python NeetCode 72",
    },
  ],

  // ── s15 · Greedy & Sorting ────────────────────────────────────────────────
  s15: [
    {
      concept: "The greedy paradigm — at each step, make the locally optimal choice and commit to it. The key question: does a locally optimal choice always lead to a globally optimal solution? (It doesn't always — that's when DP is needed.)",
      yt: "greedy algorithm explained Python when to use",
    },
    {
      concept: "Interval scheduling greedy — sort by end time. Greedily select each interval if it doesn't overlap the last selected. This end-time sorting provably maximises the number of selected intervals.",
      yt: "interval scheduling greedy algorithm end time sort Python",
    },
    {
      concept: "Jump Game greedy insight — track the furthest reachable index as you scan left to right. If current index exceeds max reach, you're stuck. One pass, O(n), no extra space.",
      yt: "jump game greedy Python NeetCode 55 explained",
    },
    {
      concept: "Python sort with custom key — sorted(arr, key=lambda x: x[1]) sorts by second element. Multi-key: key=lambda x: (x[0], -x[1]). Python sort is stable (preserves relative order of equal elements).",
      yt: "Python sort custom key lambda comparator tutorial",
    },
    {
      concept: "When greedy fails — arbitrary coin denominations, weighted path problems, partition problems. If you try greedy and it fails on a simple example, switch to DP.",
      yt: "greedy vs dynamic programming when greedy fails Python",
    },
  ],
};

export default learnBefore;