import { JavaLearnTopic } from "@/types";

export type JavaLearnBeforeMap = Record<string, JavaLearnTopic[]>;

const learnBeforeJava: JavaLearnBeforeMap = {

  // ── Section 1 · Arrays — Hash Maps & Basic Traversal ──────────────────────
  s1: [
    {
      concept: "int[] vs ArrayList<Integer> — int[] is fixed-size, stores primitives directly, and is fast. ArrayList<Integer> is dynamic but boxes every int to Integer, adding memory and GC overhead. For most LC problems, use int[] when size is known.",
      yt: "Search: 'Java int array vs ArrayList difference explained'",
      trap: "ArrayList<int> does not compile — int is a primitive. Use ArrayList<Integer> or int[].",
    },
    {
      concept: "HashMap<K,V> — Java's dict equivalent. Learn put(), get(), getOrDefault(), containsKey(), entrySet(), keySet(). Average O(1) for all operations due to hashing.",
      yt: "Search: 'Java HashMap tutorial beginners' — Coding with John or Telusko",
      trap: "map.get(key) returns null if key is absent. Unboxing null to int crashes with NullPointerException. Always use map.getOrDefault(key, 0).",
    },
    {
      concept: "HashSet<T> — O(1) membership checking. add(), contains(), remove(). Use it for 'have I seen this before?' problems instead of a list search.",
      yt: "Search: 'Java HashSet tutorial'",
      trap: null,
    },
    {
      concept: "Big O notation — O(1), O(n), O(n²), O(log n). You must state complexity for every solution in an interview. Java's verbosity doesn't change complexity, but beginners often accidentally write O(n²) by using list.contains() inside a loop.",
      yt: "Search: 'Big O notation Java NeetCode CS Dojo'",
      trap: "ArrayList.contains() is O(n), not O(1). Using it inside a loop gives O(n²). Use HashSet.contains() for O(1).",
    },
    {
      concept: "Autoboxing — Java silently converts int↔Integer when putting primitives into collections. Understand this to avoid NullPointerException when unboxing a missing map value.",
      yt: "Search: 'Java autoboxing unboxing explained'",
      trap: "Integer cache only covers -128 to 127. Two Integer objects compared with == may return false outside this range. Always use .equals() to compare Integer objects.",
    },
    {
      concept: "Kadane's Algorithm — maintain a running sum that resets to 0 when it goes negative. The running sum represents the best subarray ending at the current index. Track the global max separately.",
      yt: "Search: 'Kadane algorithm Java maximum subarray'",
      trap: null,
    },
  ],

  // ── Section 2 · Strings — Basic Manipulation ──────────────────────────────
  s2: [
    {
      concept: "String immutability — every 'modification' creates a new String object. String s = s + 'x' in a loop is O(n²). Always use StringBuilder for anything built incrementally.",
      yt: "Search: 'Java StringBuilder vs String concatenation performance'",
      trap: "String concatenation with += in a loop is Java's most common string mistake and will be caught in code review. Always use StringBuilder.",
    },
    {
      concept: "StringBuilder API — append(), insert(), delete(), deleteCharAt(), reverse(), toString(), length(), charAt(). Learn these cold. sb.reverse() alone solves several easy problems.",
      yt: "Search: 'Java StringBuilder methods tutorial'",
      trap: null,
    },
    {
      concept: "char operations — String.charAt(i) returns a char. Character.isLetter(), Character.isDigit(), Character.isAlphabetic(), Character.toLowerCase(). Learn these for string cleaning problems.",
      yt: "Search: 'Java char Character class methods tutorial'",
      trap: "char arithmetic: 'a' - 'a' = 0, 'z' - 'a' = 25. Use this for frequency array indexing: freq[c - 'a']++.",
    },
    {
      concept: "Two-pointer on strings — either convert to char[] with toCharArray() for in-place mutation, or use two int indices on the String directly. char[] is faster for manipulation.",
      yt: "Search: 'Two pointer string Java palindrome check'",
      trap: null,
    },
    {
      concept: "Frequency array — int[] freq = new int[26]; freq[c - 'a']++. Use this instead of HashMap<Character,Integer> for lowercase-only problems. Much faster and cleaner.",
      yt: "Search: 'Java frequency counting char array vs HashMap'",
      trap: null,
    },
    {
      concept: "String.equals() vs == — == compares references (object identity), almost always wrong for Strings. .equals() compares content. .equalsIgnoreCase() for case-insensitive.",
      yt: null,
      trap: "String comparison with == is one of Java's most common bugs. The JVM interns some strings so == sometimes works — this makes the bug intermittent and hard to catch. Always use .equals().",
    },
  ],

  // ── Section 3 · Binary Search — Intro ─────────────────────────────────────
  s3: [
    {
      concept: "Binary search invariant — at every step the answer must lie within [lo, hi]. Every template decision — how to update lo and hi, which termination condition to use — follows from preserving this invariant.",
      yt: "Search: 'Binary search Java template explained' — NeetCode or Inside Code",
      trap: null,
    },
    {
      concept: "Integer overflow — (lo + hi) / 2 overflows when lo and hi are large ints (sum > 2^31 - 1). Always write lo + (hi - lo) / 2. Python doesn't have this problem; Java does.",
      yt: "Search: 'Binary search integer overflow Java lo hi mid fix'",
      trap: "(lo + hi) / 2 is WRONG in Java. lo + (hi - lo) / 2 is correct. This is specifically asked about in Java interviews — mention it proactively.",
    },
    {
      concept: "Pick one template and commit — closed interval while(lo<=hi) with lo=mid+1, hi=mid-1; OR half-open while(lo<hi) with lo=mid+1, hi=mid. Mixing them causes infinite loops.",
      yt: "Search: 'Binary search closed vs open interval Java template'",
      trap: "Inconsistency between templates is the #1 binary search bug. Pick one, trace it on arrays of size 1 and 2, and never deviate.",
    },
    {
      concept: "Arrays.binarySearch() — Java's built-in returns negative values for missing elements. Its contract is confusing under interview pressure. Know it exists but always implement from scratch.",
      yt: null,
      trap: "Never use Arrays.binarySearch() in an interview. Implement from scratch every time.",
    },
    {
      concept: "Binary search on the answer space — when the answer itself is a number you can search over. Define a feasibility function isValid(mid), verify it is monotonic, then binary search over [lo, hi] of the answer range.",
      yt: "Search: 'Binary search on answer Java Koko eating bananas'",
      trap: null,
    },
  ],

  // ── Section 4 · Stacks & Queues ───────────────────────────────────────────
  s4: [
    {
      concept: "ArrayDeque instead of Stack<T> — Java's Stack class is legacy, synchronised, and slow. Always use Deque<Integer> dq = new ArrayDeque<>() as your stack and queue.",
      yt: "Search: 'Java ArrayDeque tutorial stack queue replace Stack class'",
      trap: "Never use Stack<T> in interviews. Use ArrayDeque and state why if asked: Stack is a legacy class that extends Vector, adding unnecessary synchronization overhead.",
    },
    {
      concept: "ArrayDeque API — as stack: push()/pop()/peek(). As queue: offer()/poll()/peek(). As deque: offerFirst()/offerLast()/pollFirst()/pollLast(). Learn all six pairs.",
      yt: "Search: 'Java Deque ArrayDeque methods explained'",
      trap: "ArrayDeque does NOT accept null elements. If you need null in a queue (rare), use LinkedList<T> as Queue instead.",
    },
    {
      concept: "Monotonic Stack — a stack that stays sorted by popping elements that violate the order. Each element is pushed and popped at most once, so total work across the array is O(n) amortised.",
      yt: "Search: 'Monotonic stack Java explained' — NeetCode Daily Temperatures video",
      trap: null,
    },
    {
      concept: "LIFO vs FIFO — Stack (LIFO) for: bracket matching, DFS, call stack simulation. Queue (FIFO) for: BFS, level-order traversal, task processing in arrival order.",
      yt: "Search: 'Stack vs queue Java when to use which'",
      trap: null,
    },
    {
      concept: "Parentheses matching — push opening brackets onto a stack. On a closing bracket, check that the top of the stack is the matching opener. Understand why this works before memorising it.",
      yt: "Search: 'Valid parentheses Java stack solution'",
      trap: null,
    },
  ],

  // ── Section 5 · Linked Lists ──────────────────────────────────────────────
  s5: [
    {
      concept: "Build ListNode from scratch — class ListNode { int val; ListNode next; ListNode(int v){ val=v; } } Write this from memory. Build a 5-node list by hand and traverse it. Do not skip this.",
      yt: "Search: 'Linked list Java implementation from scratch'",
      trap: null,
    },
    {
      concept: "Null safety — every time you write node.next, ask: could node be null? Java throws NullPointerException immediately. Python's None is more forgiving on attribute access. Java is not.",
      yt: null,
      trap: "while(curr != null && curr.next != null) — memorise this guard. Most linked list crashes in Java are a missing null check. Always check the outer node before accessing .next.",
    },
    {
      concept: "Java references — ListNode a = b copies the reference, not the node. Both variables point to the same object. Changing a.val changes b.val. Draw pointer diagrams on paper.",
      yt: "Search: 'Java reference vs value objects pass by reference'",
      trap: null,
    },
    {
      concept: "Dummy head pattern — ListNode dummy = new ListNode(0); dummy.next = head; — eliminates edge cases when the head itself changes (deletion, insertion). Always return dummy.next.",
      yt: "Search: 'Dummy node sentinel linked list Java'",
      trap: null,
    },
    {
      concept: "Fast/slow pointer (Floyd's) — fast moves 2 steps, slow moves 1. They meet inside a cycle. The meeting point, combined with a pointer from head, finds the cycle entry. Draw this.",
      yt: "Search: 'Fast slow pointer Java linked list cycle detection Floyd'",
      trap: null,
    },
    {
      concept: "Three-pointer reversal — ListNode prev = null, curr = head. Inside loop: save ListNode next = curr.next before overwriting curr.next = prev. Then advance both pointers.",
      yt: "Search: 'Reverse linked list Java iterative three pointer'",
      trap: "Save next BEFORE modifying curr.next = prev. Forgetting this loses the rest of the list permanently.",
    },
  ],

  // ── Section 6 · LRU Cache ─────────────────────────────────────────────────
  s6: [
    {
      concept: "LRU eviction policy — on cache miss, evict the Least Recently Used entry. Both get and put must be O(1). A list alone is O(n) lookup. A map alone is O(n) ordered eviction. Neither alone works.",
      yt: "Search: 'LRU cache Java design explained'",
      trap: null,
    },
    {
      concept: "HashMap + Doubly Linked List — HashMap gives O(1) node access by key. DLL gives O(1) node removal and insertion anywhere. Together: O(1) for both get and put.",
      yt: "Search: 'LRU cache Java HashMap doubly linked list from scratch'",
      trap: null,
    },
    {
      concept: "Dummy head and dummy tail — two sentinel ListNode objects at both ends of the DLL. They eliminate null checks when removing the first/last real node or inserting into an empty list.",
      yt: null,
      trap: "Without dummy head/tail, removing the only node or inserting into an empty DLL requires special-casing. Sentinels make every operation uniform.",
    },
    {
      concept: "Java's LinkedHashMap — implements LRU when constructed with accessOrder=true and overriding removeEldestEntry. Know it exists, but implement HashMap + DLL from scratch in every interview.",
      yt: "Search: 'Java LinkedHashMap LRU cache accessOrder'",
      trap: "Never use LinkedHashMap for LRU in an interview unless the interviewer explicitly says it is allowed.",
    },
  ],

  // ── Section 7 · Binary Search — Applied ──────────────────────────────────
  s7: [
    {
      concept: "Rotated sorted arrays — rotation splits the array into two sorted halves. Comparing arr[lo] and arr[mid] tells you which half is cleanly sorted. Use that to decide which side to search.",
      yt: "Search: 'Search rotated sorted array Java binary search'",
      trap: null,
    },
    {
      concept: "2D matrix binary search — treat an m×n sorted matrix as a virtual 1D array of length m*n. Index i maps to: row = i / cols, col = i % cols.",
      yt: "Search: 'Search 2D matrix Java binary search flatten'",
      trap: "Use long for the virtual index if m*n could exceed Integer.MAX_VALUE.",
    },
    {
      concept: "Binary search on answer — define a boolean isValid(long mid) feasibility function, verify it is monotonic (all false then all true, or vice versa), then binary search over the answer range.",
      yt: "Search: 'Binary search on answer Java capacity ship packages'",
      trap: null,
    },
    {
      concept: "Large answer space needs long — when the answer can be up to 10^9 or 10^18, declare long lo = 0, long hi = (long)1e18. int overflows silently at ~2.1 billion.",
      yt: null,
      trap: "Forgetting to use long for large answer spaces causes silent overflow. Always check the problem constraints before choosing int vs long.",
    },
  ],

  // ── Section 8 · Two Pointers (Medium) ─────────────────────────────────────
  s8: [
    {
      concept: "Two-pointer invariant on sorted arrays — moving the left pointer right increases the sum, moving the right pointer left decreases it. This directional certainty gives O(n) instead of O(n²).",
      yt: "Search: 'Two pointers sorted array Java 3Sum explained'",
      trap: null,
    },
    {
      concept: "3Sum deduplication — sort first. Outer loop: if(i > 0 && nums[i] == nums[i-1]) continue. After finding a triplet: while(lo<hi && nums[lo]==nums[lo+1]) lo++; while(lo<hi && nums[hi]==nums[hi-1]) hi--;",
      yt: "Search: '3Sum Java solution deduplication NeetCode'",
      trap: "Missing deduplication produces duplicate triplets in the result. Always sort first and add both skip checks.",
    },
    {
      concept: "Dutch National Flag — three-region partition: elements in [0,lo) are 0, [lo,mid) are 1, [hi,n) are 2. Loop while mid <= hi. Swap based on nums[mid] value.",
      yt: "Search: 'Sort colors Dutch national flag Java two pointers'",
      trap: null,
    },
    {
      concept: "Floyd's cycle detection for Find Duplicate — treating array values as 'next pointers' creates a linked list. A duplicate value means two indices point to the same next node — that's a cycle.",
      yt: "Search: 'Find duplicate number Java Floyd cycle detection array'",
      trap: null,
    },
  ],

  // ── Section 9 · Sliding Window ────────────────────────────────────────────
  s9: [
    {
      concept: "Sliding window mental model — expand right unconditionally, shrink left only when the window violates a constraint. Both pointers only move forward, so total work is O(n) amortised.",
      yt: "Search: 'Sliding window technique Java NeetCode explained'",
      trap: null,
    },
    {
      concept: "HashMap<Character,Integer> for window frequency — add: map.put(c, map.getOrDefault(c,0)+1). Remove: map.put(c, map.get(c)-1); if(map.get(c)==0) map.remove(c).",
      yt: "Search: 'Sliding window HashMap Java character frequency pattern'",
      trap: "The map.remove(c) step is important — it keeps map.size() accurate as a count of distinct characters in the window. Skipping it breaks size-based shrink conditions.",
    },
    {
      concept: "int[] freq = new int[26] — use this instead of HashMap for lowercase-only problems. Faster, simpler, and freq[c-'a'] is cleaner than map.getOrDefault(c,0).",
      yt: null,
      trap: null,
    },
    {
      concept: "ArrayDeque for sliding window maximum — store indices, not values. Remove from back when back value <= current. Remove from front when front index is out of the window.",
      yt: "Search: 'Sliding window maximum Java ArrayDeque monotonic deque'",
      trap: "Store indices in the deque, not values. You need the index to check whether the front element has left the current window.",
    },
  ],

  // ── Section 10 · Prefix Sum & Intervals ──────────────────────────────────
  s10: [
    {
      concept: "Prefix sum — int[] pre = new int[n+1]; pre[i] = pre[i-1] + arr[i-1]. Range sum [l,r] = pre[r+1] - pre[l]. Build in O(n), query in O(1).",
      yt: "Search: 'Prefix sum Java explained range query'",
      trap: null,
    },
    {
      concept: "Subarray sum equals K — HashMap<Integer,Integer> map. For each running sum, check if (sum - k) is in map. map.put(0,1) before the loop handles subarrays starting at index 0.",
      yt: "Search: 'Subarray sum equals k Java HashMap prefix sum'",
      trap: "Initialise map.put(0, 1) before the loop. Forgetting this misses subarrays that start from index 0.",
    },
    {
      concept: "Prefix sum modulo — pre[j]%k == pre[i]%k means sum(i,j) is divisible by k. Java's % can return negative values for negative operands — normalise with (val % k + k) % k.",
      yt: "Search: 'Prefix sum modulo Java subarray divisible by k'",
      trap: "Java's % operator returns negative results for negative inputs. Always normalise: (val % k + k) % k.",
    },
    {
      concept: "Interval merging — Arrays.sort(intervals, (a,b)->a[0]-b[0]) to sort by start. Scan linearly: if current start <= last end, extend. Otherwise add a new interval to results.",
      yt: "Search: 'Merge intervals Java sort Comparator lambda'",
      trap: null,
    },
  ],

  // ── Section 11 · Recursion Warm-Up ───────────────────────────────────────
  s11: [
    {
      concept: "The call stack in Java — each method call creates a stack frame with local variables and return address. Default thread stack is ~512KB–1MB. Too many frames causes StackOverflowError (not a warning — a crash).",
      yt: "Search: 'Java call stack recursion explained StackOverflowError'",
      trap: "If your recursion is very deep in an interview, proactively mention: 'I'm aware this could cause StackOverflowError for very large inputs — I could convert this to an iterative approach.'",
    },
    {
      concept: "Base case + recursive case — every recursive method needs: (1) base case that returns directly, (2) a recursive call with strictly smaller input. Implement factorial, fibonacci, and power(x,n) from scratch without looking anything up.",
      yt: "Search: 'Recursion Java tutorial for beginners factorial fibonacci'",
      trap: null,
    },
    {
      concept: "Why naive fibonacci is O(2^n) — draw the recursion tree and count repeated subproblems. fib(4) computes fib(2) twice, fib(1) three times. This motivates memoisation.",
      yt: "Search: 'Fibonacci recursion tree Java memoization exponential'",
      trap: null,
    },
    {
      concept: "Memoisation in Java — int[] memo = new int[n]; Arrays.fill(memo, -1); check memo[i] != -1 before recursing, store result in memo[i] after computing. Turns O(2^n) into O(n).",
      yt: "Search: 'Memoization Java top-down DP array tutorial'",
      trap: "Use int[] with -1 sentinel, not HashMap<Integer,Integer>. int[] is faster, cache-friendlier, and avoids autoboxing overhead.",
    },
  ],

  // ── Section 12 · Trees (Easy) ─────────────────────────────────────────────
  s12: [
    {
      concept: "TreeNode class — class TreeNode { int val; TreeNode left, right; TreeNode(int v){val=v;} } Write this from memory before every tree problem. Always null-check before accessing .left or .right.",
      yt: "Search: 'Binary tree Java TreeNode from scratch tutorial'",
      trap: null,
    },
    {
      concept: "The 3 DFS traversals — write all three recursively. Inorder: left → visit → right. Preorder: visit → left → right. Postorder: left → right → visit. Inorder of a BST = sorted output.",
      yt: "Search: 'Tree traversal inorder preorder postorder Java recursive'",
      trap: null,
    },
    {
      concept: "BFS with Queue<TreeNode> — Queue<TreeNode> q = new LinkedList<>(); q.offer(root); while(!q.isEmpty()){ TreeNode node = q.poll(); process node; offer non-null children; }",
      yt: "Search: 'Level order traversal binary tree Java BFS LinkedList queue'",
      trap: "Use LinkedList as the Queue implementation for trees, not ArrayDeque. ArrayDeque rejects null elements — some tree problems pass null nodes to the queue.",
    },
    {
      concept: "Class-level result for DFS — for problems like diameter or max path sum where the answer may span the root, use a private int res = 0 class field updated inside the recursive helper.",
      yt: "Search: 'Diameter binary tree Java class variable recursion NeetCode'",
      trap: null,
    },
    {
      concept: "BST invariant — ALL values in the left subtree are less than the node, ALL in the right subtree are greater. Not just immediate children. Pass min/max bounds through the recursion.",
      yt: "Search: 'Validate BST Java min max bounds recursive'",
      trap: "Checking only node.val > node.left.val is WRONG. Counter-example: a left child can have a right child that is greater than the root. Pass explicit bounds.",
    },
  ],

  // ── Section 13 · Heaps / Priority Queue ──────────────────────────────────
  s13: [
    {
      concept: "PriorityQueue<T> — Java's built-in min-heap. offer() to insert, poll() to remove minimum, peek() to view minimum. O(log n) for offer/poll, O(1) for peek.",
      yt: "Search: 'Java PriorityQueue tutorial min heap explained'",
      trap: null,
    },
    {
      concept: "Max-heap — new PriorityQueue<>(Collections.reverseOrder()) for Integer. For int[]: new PriorityQueue<>((a,b) -> b[0]-a[0]). Reversed comparator = reversed order.",
      yt: "Search: 'Java PriorityQueue max heap Collections.reverseOrder Comparator lambda'",
      trap: "b[0]-a[0] overflows for large negative values. Use Integer.compare(b[0],a[0]) for correctness in all cases.",
    },
    {
      concept: "Top-K pattern — min-heap of size K. Add each element. When size exceeds K, poll(). After all elements, peek() is the Kth largest. O(n log K) overall.",
      yt: "Search: 'Top K frequent elements Java PriorityQueue'",
      trap: null,
    },
    {
      concept: "Two-heap pattern for median — PriorityQueue maxHeap (lower half), PriorityQueue minHeap (upper half). After each insertion, rebalance so sizes differ by at most 1.",
      yt: "Search: 'Find median data stream Java two heaps'",
      trap: null,
    },
    {
      concept: "Custom Comparator with int[] — PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->a[0]-b[0]) sorts by first element. Multi-key: (a,b)->a[0]!=b[0] ? a[0]-b[0] : a[1]-b[1].",
      yt: "Search: 'Java PriorityQueue int array lambda Comparator multi-key'",
      trap: null,
    },
  ],

  // ── Section 14 · Trees (Medium) ───────────────────────────────────────────
  s14: [
    {
      concept: "Iterative inorder — Deque<TreeNode> stack = new ArrayDeque<>(). Push entire left spine first. Then pop, process, push right child's left spine. Simulates the recursive call stack.",
      yt: "Search: 'Iterative inorder traversal Java Deque stack'",
      trap: null,
    },
    {
      concept: "Tree serialisation — preorder traversal with 'null' markers uniquely encodes any binary tree. Deserialise using a Queue<String> of split tokens.",
      yt: "Search: 'Serialize deserialize binary tree Java preorder BFS DFS'",
      trap: null,
    },
    {
      concept: "Tree construction from traversals — given inorder + preorder, the first preorder element is the root. Use HashMap<Integer,Integer> inorderIndex for O(1) lookup of the root's position.",
      yt: "Search: 'Construct binary tree preorder inorder Java HashMap'",
      trap: null,
    },
    {
      concept: "LCA in a general tree — post-order recursion. If both left and right subtrees return non-null, the current node is the LCA. Otherwise return whichever is non-null.",
      yt: "Search: 'Lowest common ancestor binary tree Java recursion'",
      trap: null,
    },
    {
      concept: "DP on trees — return int[] from the helper to carry multiple state values. Example for House Robber III: return new int[]{rob, skip} where rob = include this node, skip = exclude.",
      yt: "Search: 'House robber III Java DP on tree int array return'",
      trap: null,
    },
  ],

  // ── Section 15 · Backtracking ─────────────────────────────────────────────
  s15: [
    {
      concept: "Backtracking template — choose: curr.add(choice), explore: recurse(next), unchoose: curr.remove(curr.size()-1). The remove step is the undo. Without it, state accumulates incorrectly across branches.",
      yt: "Search: 'Backtracking Java template NeetCode subsets permutations'",
      trap: null,
    },
    {
      concept: "ALWAYS copy on add — res.add(new ArrayList<>(curr)) not res.add(curr). Adding curr directly adds a reference to the same object. When curr is cleared, all results become empty.",
      yt: null,
      trap: "res.add(curr) is ALWAYS WRONG. res.add(new ArrayList<>(curr)) is correct. This is Java's most common backtracking bug — it will bite you on the very first problem if you forget.",
    },
    {
      concept: "Decision tree mental model — draw 'all subsets of [1,2,3]' on paper before writing code. Each node = a choice. Backtracking = DFS on this tree with an undo step after each recursive call.",
      yt: "Search: 'Backtracking decision tree Java NeetCode subsets explained'",
      trap: null,
    },
    {
      concept: "Deduplication — sort input first. Then inside the loop: if(i > start && candidates[i] == candidates[i-1]) continue. This skips duplicate branches at the same recursion depth.",
      yt: "Search: 'Subsets II Permutations II Java deduplication backtracking'",
      trap: null,
    },
    {
      concept: "Grid backtracking — mark cells in-place before recursing: char orig = board[r][c]; board[r][c]='#'; recurse; board[r][c]=orig. This is the unchoose step applied to a 2D grid.",
      yt: "Search: 'Word search Java backtracking grid in-place mark'",
      trap: null,
    },
  ],

  // ── Section 16 · Greedy ───────────────────────────────────────────────────
  s16: [
    {
      concept: "Greedy choice property — commit to the locally optimal choice at each step. The exchange argument justifies it: swapping any non-greedy choice toward the greedy choice cannot worsen the result.",
      yt: "Search: 'Greedy algorithm Java explained examples exchange argument'",
      trap: null,
    },
    {
      concept: "Comparator lambda — Arrays.sort(intervals, (a,b)->a[0]-b[0]) to sort 2D array by first element. For List<int[]>: list.sort((a,b)->a[0]-b[0]). Multi-key: (a,b)->a[0]!=b[0]?Integer.compare(a[0],b[0]):Integer.compare(a[1],b[1]).",
      yt: "Search: 'Java Comparator lambda Arrays.sort 2D array tutorial'",
      trap: "a[0]-b[0] overflows when values are large negatives (e.g. Integer.MIN_VALUE). Use Integer.compare(a[0],b[0]) for correctness. This is an interview-worthy point to mention.",
    },
    {
      concept: "Interval scheduling — sort by end time. Maintain int lastEnd. Greedily pick each interval if start >= lastEnd, then update lastEnd. End-time sorting provably maximises the number of non-overlapping selections.",
      yt: "Search: 'Non-overlapping intervals Java greedy sort end time'",
      trap: null,
    },
    {
      concept: "Jump Game greedy — maintain int maxReach = 0. At each index i: if(i > maxReach) return false. Update maxReach = Math.max(maxReach, i + nums[i]).",
      yt: "Search: 'Jump game Java greedy solution NeetCode'",
      trap: null,
    },
  ],

  // ── Section 17 · DP Wave 1 ────────────────────────────────────────────────
  s17: [
    {
      concept: "DP state definition — write dp[i] in plain English BEFORE writing any code. 'dp[i] = minimum cost to reach step i.' An unclear state definition leads directly to an incorrect recurrence.",
      yt: "Search: 'Dynamic programming Java NeetCode introduction state definition'",
      trap: null,
    },
    {
      concept: "Top-down memoisation — int[] memo = new int[n]; Arrays.fill(memo, -1); Check memo[i] != -1 before recursing, store in memo[i] after computing. For 2D: int[][] memo = new int[m][n]; fill with -1.",
      yt: "Search: 'Top-down DP memoization Java int array tutorial'",
      trap: "Use int[] with -1 sentinel instead of Integer[] or Map. int[] is faster and avoids autoboxing. Use a different sentinel (e.g. Integer.MIN_VALUE) if -1 is a valid answer.",
    },
    {
      concept: "Bottom-up tabulation — int[] dp = new int[n+1]; Set base cases first, then fill with a loop. No recursion overhead, usually preferred in interviews for clarity.",
      yt: "Search: 'Bottom-up tabulation Java DP climbing stairs house robber'",
      trap: null,
    },
    {
      concept: "LCS — int[][] dp = new int[m+1][n+1]; if(s1.charAt(i-1)==s2.charAt(j-1)) dp[i][j]=dp[i-1][j-1]+1; else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);",
      yt: "Search: 'Longest common subsequence Java 2D DP NeetCode'",
      trap: null,
    },
    {
      concept: "LIS O(n log n) — maintain int[] tails array of size. For each num, find insertion position with Arrays.binarySearch(). Insert or replace. Final size = LIS length.",
      yt: "Search: 'Longest increasing subsequence Java O n log n binary search patience sort'",
      trap: "Arrays.binarySearch returns -(insertionPoint+1) for missing elements. To get the insertion point: int idx = Arrays.binarySearch(tails,0,size,num); if(idx < 0) idx = -(idx+1);",
    },
  ],

  // ── Section 18 · Graphs ───────────────────────────────────────────────────
  s18: [
    {
      concept: "Adjacency list — Map<Integer,List<Integer>> adj = new HashMap<>(); Use adj.computeIfAbsent(u, k->new ArrayList<>()).add(v) — cleaner than the manual null-check and instantiate pattern.",
      yt: "Search: 'Graph adjacency list Java computeIfAbsent'",
      trap: null,
    },
    {
      concept: "Visited tracking — boolean[] visited = new boolean[n]; Mark visited[node]=true WHEN ENQUEUING, not when dequeuing. Dequeue-based marking lets the same node enter the queue multiple times.",
      yt: "Search: 'BFS DFS graph Java visited array template'",
      trap: "visited[node]=true must happen at enqueue time. Marking at dequeue causes TLE on dense graphs — the same node can be added to the queue O(n) times before being processed.",
    },
    {
      concept: "BFS template — Queue<Integer> q = new LinkedList<>(); boolean[] vis = new boolean[n]; q.offer(src); vis[src]=true; while(!q.isEmpty()){ int u=q.poll(); for(int v:adj.getOrDefault(u,new ArrayList<>())){ if(!vis[v]){vis[v]=true;q.offer(v);} } }",
      yt: "Search: 'BFS graph Java template NeetCode number of islands'",
      trap: null,
    },
    {
      concept: "Union-Find from scratch — int[] parent = new int[n]; int[] rank = new int[n]; find() with path compression: parent[x]=find(parent[x]); union() by rank. You will implement this from scratch in interviews.",
      yt: "Search: 'Union Find disjoint set Java implementation' — William Fiset's video",
      trap: null,
    },
    {
      concept: "Kahn's topological sort — int[] inDeg = new int[n]; fill from edges. Queue<Integer> for 0-indegree nodes. Poll, decrement neighbours' inDeg, re-enqueue if they hit 0. If processed < n: cycle detected.",
      yt: "Search: 'Topological sort Kahn algorithm Java course schedule'",
      trap: null,
    },
    {
      concept: "Dijkstra — PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->a[0]-b[0]); int[] dist = new int[n]; Arrays.fill(dist,Integer.MAX_VALUE); Relax edges on each extraction. Skip stale entries where dist[u] < extracted distance.",
      yt: "Search: 'Dijkstra Java PriorityQueue implementation NeetCode'",
      trap: "Check if dist[u] < extractedDist before processing — stale entries remain in the queue after a shorter path is found. Processing them wastes work and may produce wrong results.",
    },
  ],

  // ── Section 19 · DP Wave 2 ────────────────────────────────────────────────
  s19: [
    {
      concept: "0/1 Knapsack — int[] dp = new int[W+1]; Outer loop over items, inner loop from W DOWN to item weight. Backward iteration prevents reusing the same item in the same pass.",
      yt: "Search: 'Knapsack 0/1 Java DP' — Aditya Verma's knapsack playlist on YouTube",
      trap: "Inner loop MUST go backward (W → weight[i]) for 0/1 knapsack. Forward gives unbounded knapsack where items can repeat — a completely different problem.",
    },
    {
      concept: "Unbounded Knapsack — same dp array but inner loop goes FORWARD (weight[i] → W). This allows the same item to contribute multiple times in the same pass.",
      yt: "Search: 'Unbounded knapsack Java coin change DP Aditya Verma'",
      trap: null,
    },
    {
      concept: "Stock state machine DP — hold and free variables. Each day: int newHold = Math.max(hold, free-price); int newFree = Math.max(free, hold+price); Update SIMULTANEOUSLY — compute both before assigning.",
      yt: "Search: 'Best time buy sell stock Java state machine DP all variants'",
      trap: "If you update hold first and then use the new hold to compute free, you get wrong answers. Compute both new values first, then assign.",
    },
    {
      concept: "Interval DP — outer loop on length: for(int len=2;len<=n;len++). Inner loop on start: for(int i=0;i+len-1<n;i++){ int j=i+len-1; fill dp[i][j] using a k split-point loop; }",
      yt: "Search: 'Interval DP Java burst balloons explained'",
      trap: null,
    },
    {
      concept: "Edit Distance — int[][] dp = new int[m+1][n+1]; Base: dp[i][0]=i, dp[0][j]=j. Recurrence: if chars match, dp[i][j]=dp[i-1][j-1]; else dp[i][j]=1+Math.min(dp[i-1][j-1], Math.min(dp[i-1][j],dp[i][j-1]));",
      yt: "Search: 'Edit distance Java 2D DP NeetCode'",
      trap: null,
    },
  ],

  // ── Section 20 · Bit Manipulation ─────────────────────────────────────────
  s20: [
    {
      concept: "Java int is exactly 32 bits, signed, two's complement. Integer.MAX_VALUE = 2^31-1 = 2,147,483,647. Integer.MIN_VALUE = -2^31 = -2,147,483,648. Know these for overflow-sensitive problems.",
      yt: "Search: 'Java int binary two complement representation bit manipulation'",
      trap: null,
    },
    {
      concept: "XOR properties — a^a=0 and a^0=a. These two facts power most 'find the unique element' problems. XOR is commutative, associative, and self-inverse.",
      yt: "Search: 'XOR bit manipulation Java single number explained'",
      trap: null,
    },
    {
      concept: "n & (n-1) clears the lowest set bit. Use in a while loop to count set bits: int count=0; while(n!=0){count++;n&=(n-1);} Or use Integer.bitCount(n) for brevity.",
      yt: "Search: 'Java n & n-1 trick bit manipulation Hamming weight'",
      trap: null,
    },
    {
      concept: "Unsigned right shift >>> — Java has >> (arithmetic, propagates sign bit) AND >>> (logical, fills with 0). Use >>> for problems involving negative numbers and bit reversal.",
      yt: "Search: 'Java unsigned right shift >>> vs >> difference signed'",
      trap: "Python has no unsigned right shift. Java does. In Reverse Bits, you need >>> not >>. Using >> on a negative number propagates the sign bit and corrupts your result.",
    },
    {
      concept: "Power of two check — n > 0 && (n & (n-1)) == 0. True iff exactly one bit is set. n & (-n) isolates the lowest set bit — used in Fenwick Trees.",
      yt: null,
      trap: null,
    },
  ],

  // ── Section 21 · Math ─────────────────────────────────────────────────────
  s21: [
    {
      concept: "Modular arithmetic with long — intermediate products can overflow int. Always use (long)a * b % MOD before taking modulo. Cast back to int only after.",
      yt: "Search: 'Java modular arithmetic overflow long MOD'",
      trap: "(int)(a * b % MOD) overflows if a*b exceeds int range before the modulo. Write (long)a * b % MOD — the cast must happen before the multiplication.",
    },
    {
      concept: "Sieve of Eratosthenes — boolean[] notPrime = new boolean[n+1]; mark composites starting from p*p in steps of p. O(n log log n) time and O(n) space.",
      yt: "Search: 'Sieve Eratosthenes Java count primes implementation'",
      trap: null,
    },
    {
      concept: "GCD — int gcd(int a, int b){ return b==0?a:gcd(b,a%b); } Euclidean algorithm, O(log(min(a,b))). LCM = a / gcd(a,b) * b (divide first to avoid overflow).",
      yt: "Search: 'GCD Euclidean algorithm Java recursive implementation'",
      trap: "LCM = a * b / gcd(a,b) can overflow. Write a / gcd(a,b) * b instead — divide before multiply.",
    },
    {
      concept: "Fast power (binary exponentiation) — O(log n): while n > 0: if n is odd multiply result by base; square base; halve n. Use long for modular power.",
      yt: "Search: 'Fast power binary exponentiation Java modular'",
      trap: null,
    },
    {
      concept: "Integer.MIN_VALUE edge case — Math.abs(Integer.MIN_VALUE) == Integer.MIN_VALUE (overflow, no positive counterpart). Handle this explicitly in Reverse Integer and Divide Two Integers.",
      yt: null,
      trap: "Math.abs(Integer.MIN_VALUE) returns Integer.MIN_VALUE — a silent overflow. Check for this before negating any potentially-minimum integer.",
    },
  ],

  // ── Section 22 · Segment Tree / BIT ──────────────────────────────────────
  s22: [
    {
      concept: "Segment Tree — supports range queries (sum/min/max) AND point updates, both O(log n). Store in int[] tree = new int[4*n]. build/query/update all take (node=1, l=0, r=n-1) as parameters.",
      yt: "Search: 'Segment tree Java implementation tutorial from scratch'",
      trap: null,
    },
    {
      concept: "Fenwick Tree (BIT) — simpler for prefix sum + point update. int[] bit = new int[n+1] (1-indexed). Update: for(int i=pos;i<=n;i+=i&(-i)) bit[i]+=val. Query: int s=0; for(int i=pos;i>0;i-=i&(-i)) s+=bit[i]; return s;",
      yt: "Search: 'Fenwick tree BIT Java tutorial' — William Fiset's video is the best",
      trap: "BIT uses 1-indexed arrays. If your input is 0-indexed, add 1 to all positions before calling update/query. Forgetting this off-by-one causes subtle wrong answers.",
    },
    {
      concept: "BIT vs Segment Tree — use BIT for prefix sum + point update (simpler, faster). Use Segment Tree for range updates, range min/max, or lazy propagation.",
      yt: null,
      trap: null,
    },
  ],

  // ── Section 23 · Hard Multi-Pattern Consolidation ─────────────────────────
  s23: [
    {
      concept: "Multi-pattern recognition — before opening an IDE, write down which 2–3 sub-problems each hard problem contains and which technique handles each. This step alone separates strong candidates.",
      yt: null,
      trap: null,
    },
    {
      concept: "Hierholzer's algorithm for Eulerian path — iterative DFS using a Deque<String>. Push to result list when no unvisited edges remain from the current node. Reverse the result at the end.",
      yt: "Search: 'Reconstruct itinerary Java Hierholzer Eulerian path DFS'",
      trap: null,
    },
    {
      concept: "Sweep line — sort events by position/time. Use TreeMap<Integer,Integer> or PriorityQueue to maintain the active set. Process start and end events in sorted order.",
      yt: "Search: 'Sweep line algorithm Java intervals skyline problem'",
      trap: null,
    },
    {
      concept: "TreeMap<K,V> as ordered dynamic map — floorKey(), ceilingKey(), firstKey(), lastKey() all O(log n). Use when you need a sorted map with predecessor/successor queries.",
      yt: "Search: 'Java TreeMap floorKey ceilingKey methods tutorial'",
      trap: null,
    },
    {
      concept: "Merge-sort-based counting — count inversions or smaller-elements-after-self during the merge step of merge sort. O(n log n) — the merge step naturally has access to relative ordering.",
      yt: "Search: 'Count smaller numbers after self Java merge sort'",
      trap: null,
    },
    {
      concept: "After each hard problem — write one sentence: 'The key insight was ___.' Not the algorithm, but the idea that made it tractable. Pattern recognition grows faster from insights than from problem volume.",
      yt: null,
      trap: null,
    },
  ],
};

export default learnBeforeJava;