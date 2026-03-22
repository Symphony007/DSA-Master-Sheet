import { Phase, Problem, Difficulty } from "@/types";

function p(
  id: number,
  lc: number,
  title: string,
  difficulty: Difficulty,
  pattern: string,
  starred = false
): Problem {
  return { id, lc, title, difficulty, pattern, starred };
}

const PHASES: Phase[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 1 — Arrays & Strings
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Phase 1",
    subtitle: "Arrays & Strings",
    prepTime: "3–4 days",
    tip: "Two pointers and hash maps are the foundation of almost everything. Don't skip string problems — they share the exact same patterns as arrays.",
    sections: [
      {
        id: "s1",
        title: "Section 1 · Arrays — Hash Maps & Traversal",
        patterns: [
          {
            name: "Hash Map / Hash Set",
            problems: [
              p(1,  1,   "Two Sum",                       "Easy",   "Hash Map",             true),
              p(2,  217, "Contains Duplicate",            "Easy",   "Hash Set",             true),
              p(3,  136, "Single Number",                 "Easy",   "XOR / Hash Set",       true),
              p(4,  268, "Missing Number",                "Easy",   "Math / XOR"),
              p(5,  169, "Majority Element",              "Easy",   "Hash Map / Moore Vote",true),
              p(6,  128, "Longest Consecutive Sequence",  "Medium", "Hash Set",             true),
              p(7,  49,  "Group Anagrams",                "Medium", "Hash Map + Sort",      true),
            ],
          },
          {
            name: "Basic Array Manipulation",
            problems: [
              p(8,  283, "Move Zeroes",                               "Easy",   "Two Pointers",    true),
              p(9,  26,  "Remove Duplicates from Sorted Array",       "Easy",   "Two Pointers"),
              p(10, 27,  "Remove Element",                            "Easy",   "Two Pointers"),
              p(11, 88,  "Merge Sorted Array",                        "Easy",   "Two Pointers",    true),
              p(12, 121, "Best Time to Buy and Sell Stock",           "Easy",   "One Pass",        true),
              p(13, 66,  "Plus One",                                  "Easy",   "Array"),
              p(14, 189, "Rotate Array",                              "Medium", "Array"),
              p(15, 238, "Product of Array Except Self",              "Medium", "Prefix Product",  true),
              p(16, 448, "Find All Numbers Disappeared in an Array",  "Easy",   "Array / Hash"),
              p(17, 48,  "Rotate Image",                              "Medium", "Matrix"),
              p(18, 54,  "Spiral Matrix",                             "Medium", "Matrix"),
              p(19, 73,  "Set Matrix Zeroes",                         "Medium", "Matrix"),
            ],
          },
          {
            name: "Kadane's — Subarray Problems",
            problems: [
              p(20, 53,  "Maximum Subarray",              "Easy",   "Kadane's",         true),
              p(21, 152, "Maximum Product Subarray",      "Medium", "Kadane's Variant", true),
              p(22, 918, "Maximum Sum Circular Subarray", "Medium", "Kadane's Variant"),
            ],
          },
        ],
      },
      {
        id: "s2",
        title: "Section 2 · Strings",
        patterns: [
          {
            name: "Two Pointers on Strings",
            problems: [
              p(23, 125, "Valid Palindrome",               "Easy",   "Two Pointers",         true),
              p(24, 344, "Reverse String",                 "Easy",   "Two Pointers"),
              p(25, 5,   "Longest Palindromic Substring",  "Medium", "Expand Around Center", true),
              p(26, 647, "Palindromic Substrings",         "Medium", "Expand Around Center", true),
            ],
          },
          {
            name: "Hash Map on Strings",
            problems: [
              p(27, 242, "Valid Anagram",                      "Easy", "Hash Map", true),
              p(28, 387, "First Unique Character in a String", "Easy", "Hash Map"),
              p(29, 383, "Ransom Note",                        "Easy", "Hash Map"),
              p(30, 290, "Word Pattern",                       "Easy", "Hash Map"),
              p(31, 205, "Isomorphic Strings",                 "Easy", "Hash Map"),
              p(32, 409, "Longest Palindrome",                 "Easy", "Hash Map / Greedy"),
            ],
          },
          {
            name: "String Manipulation",
            problems: [
              p(33, 14,  "Longest Common Prefix",                              "Easy",   "String"),
              p(34, 58,  "Length of Last Word",                                "Easy",   "String"),
              p(35, 28,  "Find the Index of the First Occurrence in a String", "Easy",   "String / KMP",   true),
              p(36, 151, "Reverse Words in a String",                          "Medium", "String"),
              p(37, 8,   "String to Integer Atoi",                             "Medium", "String Parsing", true),
              p(38, 271, "Encode and Decode Strings",                          "Medium", "String Design"),
              p(39, 179, "Largest Number",                                     "Medium", "Custom Sort",    true),
              p(40, 443, "String Compression",                                 "Medium", "Two Pointers"),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 2 — Binary Search
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    title: "Phase 2",
    subtitle: "Binary Search",
    prepTime: "1–2 days",
    tip: "Learn one template, derive it from first principles, never deviate. LC 278, 33, and 875 are your three anchor problems — do them in that order.",
    sections: [
      {
        id: "s3",
        title: "Section 3 · Binary Search",
        patterns: [
          {
            name: "Classic Binary Search",
            problems: [
              p(41, 704, "Binary Search",                  "Easy", "Binary Search"),
              p(42, 278, "First Bad Version",              "Easy", "Binary Search",  true),
              p(43, 35,  "Search Insert Position",         "Easy", "Binary Search"),
              p(44, 374, "Guess Number Higher or Lower",   "Easy", "Binary Search"),
              p(45, 69,  "Sqrtx",                         "Easy", "BS on Answer"),
            ],
          },
          {
            name: "Rotated & Variant Arrays",
            problems: [
              p(46, 33,  "Search in Rotated Sorted Array",                    "Medium", "Binary Search", true),
              p(47, 153, "Find Minimum in Rotated Sorted Array",               "Medium", "Binary Search", true),
              p(48, 34,  "Find First and Last Position of Element in Array",   "Medium", "Binary Search", true),
              p(49, 74,  "Search a 2D Matrix",                                "Medium", "Binary Search", true),
              p(50, 162, "Find Peak Element",                                  "Medium", "Binary Search"),
              p(51, 540, "Single Element in a Sorted Array",                  "Medium", "Binary Search"),
            ],
          },
          {
            name: "Binary Search on Answer",
            problems: [
              p(52, 875,  "Koko Eating Bananas",                     "Medium", "BS on Answer",       true),
              p(53, 1011, "Capacity to Ship Packages Within D Days", "Medium", "BS on Answer"),
              p(54, 410,  "Split Array Largest Sum",                  "Hard",   "BS on Answer + DP",  true),
              p(55, 4,    "Median of Two Sorted Arrays",              "Hard",   "Binary Search",      true),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 3 — Sliding Window
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    title: "Phase 3",
    subtitle: "Sliding Window",
    prepTime: "1 day",
    tip: "Expand right unconditionally, shrink left when the constraint breaks. This single mental model works on every window problem — learn it once.",
    sections: [
      {
        id: "s4",
        title: "Section 4 · Sliding Window",
        patterns: [
          {
            name: "Fixed Window",
            problems: [
              p(56, 643, "Maximum Average Subarray I",    "Easy",   "Fixed Window"),
              p(57, 567, "Permutation in String",         "Medium", "Fixed Window + Hash", true),
              p(58, 438, "Find All Anagrams in a String", "Medium", "Fixed Window + Hash", true),
            ],
          },
          {
            name: "Variable Window",
            problems: [
              p(59, 209,  "Minimum Size Subarray Sum",                      "Medium", "Variable Window",        true),
              p(60, 3,    "Longest Substring Without Repeating Characters", "Medium", "Variable Window + Set",  true),
              p(61, 424,  "Longest Repeating Character Replacement",        "Medium", "Variable Window + Hash", true),
              p(62, 1004, "Max Consecutive Ones III",                       "Medium", "Variable Window"),
              p(63, 904,  "Fruit Into Baskets",                             "Medium", "At Most K Distinct"),
              p(64, 1248, "Count Number of Nice Subarrays",                 "Medium", "Sliding Window"),
              p(65, 713,  "Subarray Product Less Than K",                   "Medium", "Variable Window"),
              p(66, 76,   "Minimum Window Substring",                       "Hard",   "Variable Window + Hash", true),
              p(67, 239,  "Sliding Window Maximum",                         "Hard",   "Monotonic Deque",        true),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 4 — Linked Lists
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 4,
    title: "Phase 4",
    subtitle: "Linked Lists",
    prepTime: "1–2 days",
    tip: "Draw every problem before coding. Build a ListNode class from scratch and traverse it by hand first — if you can't do that from memory, don't start the problems yet.",
    sections: [
      {
        id: "s5",
        title: "Section 5 · Linked Lists",
        patterns: [
          {
            name: "Basic Operations",
            problems: [
              p(68, 206, "Reverse Linked List",                   "Easy",   "Iterative / Recursive", true),
              p(69, 21,  "Merge Two Sorted Lists",                "Easy",   "Merge",                 true),
              p(70, 83,  "Remove Duplicates from Sorted List",    "Easy",   "Linked List"),
              p(71, 203, "Remove Linked List Elements",           "Easy",   "Dummy Head"),
              p(72, 160, "Intersection of Two Linked Lists",      "Easy",   "Two Pointers"),
              p(73, 82,  "Remove Duplicates from Sorted List II", "Medium", "Dummy Head"),
              p(74, 2,   "Add Two Numbers",                       "Medium", "Linked List + Math",    true),
            ],
          },
          {
            name: "Fast & Slow Pointers",
            problems: [
              p(75, 876, "Middle of the Linked List",        "Easy",   "Fast / Slow",       true),
              p(76, 141, "Linked List Cycle",                "Easy",   "Fast / Slow",       true),
              p(77, 234, "Palindrome Linked List",           "Easy",   "Fast/Slow + Reverse"),
              p(78, 19,  "Remove Nth Node From End of List", "Medium", "Fast / Slow",       true),
              p(79, 142, "Linked List Cycle II",             "Medium", "Fast/Slow + Math",  true),
            ],
          },
          {
            name: "Restructuring & Design",
            problems: [
              p(80, 143, "Reorder List",  "Medium", "Fast/Slow + Reverse + Merge",  true),
              p(81, 148, "Sort List",     "Medium", "Merge Sort on LL",             true),
              p(82, 146, "LRU Cache",     "Medium", "Hash Map + Doubly Linked List", true),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 5 — Stacks & Queues
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    title: "Phase 5",
    subtitle: "Stacks & Queues",
    prepTime: "1 day",
    tip: "Monotonic stack solves the 'nearest greater/smaller' family. Daily Temperatures is your anchor — solve it until you could write it blind, then the whole pattern clicks.",
    sections: [
      {
        id: "s6",
        title: "Section 6 · Stacks & Queues",
        patterns: [
          {
            name: "Basic Stack",
            problems: [
              p(83, 20,   "Valid Parentheses",                        "Easy",   "Stack",          true),
              p(84, 155,  "Min Stack",                                "Easy",   "Stack + Aux",    true),
              p(85, 682,  "Baseball Game",                            "Easy",   "Stack"),
              p(86, 150,  "Evaluate Reverse Polish Notation",         "Medium", "Stack"),
              p(87, 394,  "Decode String",                            "Medium", "Stack",          true),
              p(88, 1249, "Minimum Remove to Make Valid Parentheses", "Medium", "Stack"),
              p(89, 32,   "Longest Valid Parentheses",                "Hard",   "Stack / DP",     true),
            ],
          },
          {
            name: "Monotonic Stack",
            problems: [
              p(90, 496, "Next Greater Element I",         "Easy",   "Monotonic Stack"),
              p(91, 739, "Daily Temperatures",             "Medium", "Monotonic Stack",           true),
              p(92, 402, "Remove K Digits",                "Medium", "Monotonic Stack"),
              p(93, 735, "Asteroid Collision",             "Medium", "Stack"),
              p(94, 853, "Car Fleet",                      "Medium", "Monotonic Stack"),
              p(95, 84,  "Largest Rectangle in Histogram", "Hard",   "Monotonic Stack",           true),
              p(96, 42,  "Trapping Rain Water",            "Hard",   "Mono Stack / Two Pointers", true),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 6 — Recursion & Backtracking
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 6,
    title: "Phase 6",
    subtitle: "Recursion & Backtracking",
    prepTime: "2–3 days",
    tip: "Choose → Explore → Unchoose. Draw the decision tree for subsets [1,2,3] on paper before writing a single line of code. The tree IS the algorithm.",
    sections: [
      {
        id: "s7",
        title: "Section 7 · Recursion & Backtracking",
        patterns: [
          {
            name: "Subsets & Combinations",
            problems: [
              p(97,  78,  "Subsets",             "Medium", "Backtracking",          true),
              p(98,  90,  "Subsets II",          "Medium", "Backtracking + Dedup"),
              p(99,  77,  "Combinations",        "Medium", "Backtracking"),
              p(100, 39,  "Combination Sum",     "Medium", "Backtracking + Reuse",  true),
              p(101, 40,  "Combination Sum II",  "Medium", "Backtracking + Dedup"),
              p(102, 216, "Combination Sum III", "Medium", "Backtracking"),
            ],
          },
          {
            name: "Permutations",
            problems: [
              p(103, 46, "Permutations",    "Medium", "Backtracking",          true),
              p(104, 47, "Permutations II", "Medium", "Backtracking + Dedup"),
            ],
          },
          {
            name: "String Backtracking",
            problems: [
              p(105, 17,  "Letter Combinations of a Phone Number", "Medium", "Backtracking"),
              p(106, 22,  "Generate Parentheses",                  "Medium", "Backtracking",      true),
              p(107, 131, "Palindrome Partitioning",               "Medium", "Backtracking + DP", true),
              p(108, 93,  "Restore IP Addresses",                  "Medium", "Backtracking"),
            ],
          },
          {
            name: "Grid & Hard Backtracking",
            problems: [
              p(109, 79, "Word Search",   "Medium", "Backtracking on Grid", true),
              p(110, 51, "N-Queens",      "Hard",   "Backtracking",         true),
              p(111, 37, "Sudoku Solver", "Hard",   "Backtracking"),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 7 — Trees
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    title: "Phase 7",
    subtitle: "Trees",
    prepTime: "2–3 days",
    tip: "90% of tree problems = DFS recursion: handle None → solve left → solve right → combine. Get this skeleton in muscle memory before touching any problem.",
    sections: [
      {
        id: "s8",
        title: "Section 8 · Trees — Easy DFS",
        patterns: [
          {
            name: "DFS / Recursive",
            problems: [
              p(112, 104, "Maximum Depth of Binary Tree", "Easy", "DFS", true),
              p(113, 226, "Invert Binary Tree",           "Easy", "DFS", true),
              p(114, 100, "Same Tree",                    "Easy", "DFS", true),
              p(115, 101, "Symmetric Tree",               "Easy", "DFS", true),
              p(116, 110, "Balanced Binary Tree",         "Easy", "DFS", true),
              p(117, 543, "Diameter of Binary Tree",      "Easy", "DFS", true),
              p(118, 112, "Path Sum",                     "Easy", "DFS"),
              p(119, 257, "Binary Tree Paths",            "Easy", "DFS + Backtrack"),
              p(120, 572, "Subtree of Another Tree",      "Easy", "DFS"),
              p(121, 617, "Merge Two Binary Trees",       "Easy", "DFS"),
              p(122, 404, "Sum of Left Leaves",           "Easy", "DFS"),
            ],
          },
          {
            name: "BST — Easy",
            problems: [
              p(123, 235, "Lowest Common Ancestor of a Binary Search Tree", "Easy", "BST Property",    true),
              p(124, 108, "Convert Sorted Array to Binary Search Tree",     "Easy", "Divide & Conquer"),
            ],
          },
          {
            name: "BFS Intro",
            problems: [
              p(125, 94,  "Binary Tree Inorder Traversal",     "Easy",   "DFS / Iterative"),
              p(126, 111, "Minimum Depth of Binary Tree",      "Easy",   "BFS / DFS"),
              p(127, 102, "Binary Tree Level Order Traversal", "Medium", "BFS", true),
            ],
          },
        ],
      },
      {
        id: "s9",
        title: "Section 9 · Trees — Medium",
        patterns: [
          {
            name: "BFS Variants",
            problems: [
              p(128, 199, "Binary Tree Right Side View",               "Medium", "BFS",         true),
              p(129, 103, "Binary Tree Zigzag Level Order Traversal",  "Medium", "BFS + Deque"),
              p(130, 513, "Find Bottom Left Tree Value",               "Medium", "BFS"),
              p(131, 662, "Maximum Width of Binary Tree",              "Medium", "BFS + Index"),
              p(132, 116, "Populating Next Right Pointers in Each Node","Medium","BFS"),
            ],
          },
          {
            name: "DFS — Path Problems",
            problems: [
              p(133, 437,  "Path Sum III",                            "Medium", "DFS + Prefix Sum", true),
              p(134, 236,  "Lowest Common Ancestor of a Binary Tree", "Medium", "DFS",              true),
              p(135, 129,  "Sum Root to Leaf Numbers",                "Medium", "DFS"),
              p(136, 1448, "Count Good Nodes in Binary Tree",         "Medium", "DFS"),
              p(137, 124,  "Binary Tree Maximum Path Sum",            "Hard",   "DFS",              true),
            ],
          },
          {
            name: "BST — Medium",
            problems: [
              p(138, 98,  "Validate Binary Search Tree",      "Medium", "DFS",            true),
              p(139, 230, "Kth Smallest Element in a BST",    "Medium", "Inorder DFS",    true),
              p(140, 173, "Binary Search Tree Iterator",      "Medium", "Stack / Inorder"),
              p(141, 538, "Convert BST to Greater Tree",      "Medium", "Reverse Inorder"),
              p(142, 450, "Delete Node in a BST",             "Medium", "BST"),
              p(143, 701, "Insert into a Binary Search Tree", "Medium", "BST"),
            ],
          },
          {
            name: "Tree Construction & Serialization",
            problems: [
              p(144, 105, "Construct Binary Tree from Preorder and Inorder Traversal",  "Medium", "Divide & Conquer", true),
              p(145, 106, "Construct Binary Tree from Inorder and Postorder Traversal", "Medium", "Divide & Conquer"),
              p(146, 114, "Flatten Binary Tree to Linked List",                         "Medium", "DFS"),
              p(147, 297, "Serialize and Deserialize Binary Tree",                      "Hard",   "BFS / DFS",        true),
            ],
          },
        ],
      },
      {
        id: "s10",
        title: "Section 10 · Heaps / Priority Queue",
        patterns: [
          {
            name: "Top-K",
            problems: [
              p(148, 215, "Kth Largest Element in an Array", "Medium", "Heap / Quickselect", true),
              p(149, 347, "Top K Frequent Elements",         "Medium", "Heap + Hash",        true),
              p(150, 973, "K Closest Points to Origin",      "Medium", "Heap",               true),
              p(151, 692, "Top K Frequent Words",            "Medium", "Heap + Hash"),
              p(152, 451, "Sort Characters By Frequency",    "Medium", "Heap + Hash"),
            ],
          },
          {
            name: "Heap Design & Two Heaps",
            problems: [
              p(153, 621, "Task Scheduler",               "Medium", "Greedy + Heap",  true),
              p(154, 355, "Design Twitter",               "Medium", "Heap + Hash"),
              p(155, 23,  "Merge k Sorted Lists",         "Hard",   "Heap + LL",      true),
              p(156, 295, "Find Median from Data Stream", "Hard",   "Two Heaps",      true),
              p(157, 480, "Sliding Window Median",        "Hard",   "Two Heaps"),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 8 — Graphs
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 8,
    title: "Phase 8",
    subtitle: "Graphs",
    prepTime: "2–3 days",
    tip: "BFS + DFS solves 80% of graph problems. Number of Islands first — perfect DFS grid warm-up. Add to visited when enqueuing in BFS, not dequeuing.",
    sections: [
      {
        id: "s11",
        title: "Section 11 · Graph BFS / DFS",
        patterns: [
          {
            name: "DFS / BFS on Grid",
            problems: [
              p(158, 733, "Flood Fill",                  "Easy",   "DFS on Grid"),
              p(159, 200, "Number of Islands",           "Medium", "DFS / BFS",         true),
              p(160, 695, "Max Area of Island",          "Medium", "DFS",               true),
              p(161, 463, "Island Perimeter",            "Easy",   "Grid"),
              p(162, 994, "Rotting Oranges",             "Medium", "Multi-source BFS",  true),
              p(163, 542, "01 Matrix",                   "Medium", "Multi-source BFS"),
              p(164, 130, "Surrounded Regions",          "Medium", "DFS from Border"),
              p(165, 417, "Pacific Atlantic Water Flow", "Medium", "DFS / BFS",         true),
            ],
          },
          {
            name: "Graph Traversal",
            problems: [
              p(166, 133, "Clone Graph",                         "Medium", "BFS / DFS",        true),
              p(167, 547, "Number of Provinces",                 "Medium", "Union-Find / DFS", true),
              p(168, 785, "Is Graph Bipartite",                  "Medium", "BFS Coloring"),
              p(169, 127, "Word Ladder",                         "Hard",   "BFS",              true),
              p(170, 399, "Evaluate Division",                   "Medium", "DFS / Union-Find"),
              p(171, 329, "Longest Increasing Path in a Matrix", "Hard",   "DFS + Memo",       true),
            ],
          },
        ],
      },
      {
        id: "s12",
        title: "Section 12 · Union-Find & Topological Sort",
        patterns: [
          {
            name: "Union-Find",
            problems: [
              p(172, 323,  "Number of Connected Components in Undirected Graph", "Medium", "Union-Find"),
              p(173, 684,  "Redundant Connection",                               "Medium", "Union-Find"),
              p(174, 721,  "Accounts Merge",                                     "Medium", "Union-Find", true),
              p(175, 1319, "Number of Operations to Make Network Connected",     "Medium", "Union-Find"),
            ],
          },
          {
            name: "Topological Sort",
            problems: [
              p(176, 207, "Course Schedule",        "Medium", "Topo Sort — Cycle Detection", true),
              p(177, 210, "Course Schedule II",     "Medium", "Topological Sort",            true),
              p(178, 310, "Minimum Height Trees",   "Medium", "Topological Sort / BFS"),
              p(179, 269, "Alien Dictionary",       "Hard",   "Topological Sort",            true),
            ],
          },
          {
            name: "Shortest Path",
            problems: [
              p(180, 743,  "Network Delay Time",                  "Medium", "Dijkstra"),
              p(181, 787,  "Cheapest Flights Within K Stops",     "Medium", "Bellman-Ford / BFS"),
              p(182, 1091, "Shortest Path in Binary Matrix",      "Medium", "BFS"),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 9 — Dynamic Programming
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 9,
    title: "Phase 9",
    subtitle: "Dynamic Programming",
    prepTime: "3–4 days",
    tip: "Write dp[i] = '...' in plain English before touching code. The state definition is 80% of every DP problem. Climbing Stairs → House Robber → Coin Change, in that order, always.",
    sections: [
      {
        id: "s13",
        title: "Section 13 · DP — 1D, Sequences & Grid",
        patterns: [
          {
            name: "1D DP (Linear)",
            problems: [
              p(183, 70,  "Climbing Stairs",          "Easy",   "1D DP",          true),
              p(184, 746, "Min Cost Climbing Stairs",  "Easy",   "1D DP",          true),
              p(185, 198, "House Robber",              "Easy",   "1D DP",          true),
              p(186, 213, "House Robber II",           "Medium", "1D DP Circular", true),
              p(187, 338, "Counting Bits",             "Easy",   "1D DP / Bit"),
              p(188, 413, "Arithmetic Slices",         "Medium", "1D DP"),
              p(189, 91,  "Decode Ways",               "Medium", "1D DP",          true),
              p(190, 139, "Word Break",                "Medium", "1D DP",          true),
              p(191, 279, "Perfect Squares",           "Medium", "1D DP / BFS"),
            ],
          },
          {
            name: "Subsequence DP",
            problems: [
              p(192, 300,  "Longest Increasing Subsequence",           "Medium", "Subsequence DP / BS", true),
              p(193, 1143, "Longest Common Subsequence",               "Medium", "2D DP",               true),
              p(194, 516,  "Longest Palindromic Subsequence",          "Medium", "2D DP"),
              p(195, 673,  "Number of Longest Increasing Subsequences","Medium", "DP"),
            ],
          },
          {
            name: "2D Grid DP",
            problems: [
              p(196, 62,   "Unique Paths",                            "Medium", "2D DP", true),
              p(197, 63,   "Unique Paths II",                         "Medium", "2D DP"),
              p(198, 64,   "Minimum Path Sum",                        "Medium", "2D DP", true),
              p(199, 221,  "Maximal Square",                          "Medium", "2D DP", true),
              p(200, 1277, "Count Square Submatrices with All Ones",  "Medium", "2D DP"),
            ],
          },
        ],
      },
      {
        id: "s14",
        title: "Section 14 · Knapsack, Stock & Hard DP",
        patterns: [
          {
            name: "Knapsack DP",
            problems: [
              p(201, 322,  "Coin Change",                 "Medium", "Unbounded Knapsack", true),
              p(202, 518,  "Coin Change 2",               "Medium", "Unbounded Knapsack", true),
              p(203, 416,  "Partition Equal Subset Sum",  "Medium", "0/1 Knapsack",       true),
              p(204, 494,  "Target Sum",                  "Medium", "0/1 Knapsack",       true),
              p(205, 474,  "Ones and Zeroes",             "Medium", "2D Knapsack"),
              p(206, 1049, "Last Stone Weight II",        "Medium", "0/1 Knapsack"),
              p(207, 377,  "Combination Sum IV",          "Medium", "Unbounded Knapsack"),
            ],
          },
          {
            name: "Stock / State Machine DP",
            problems: [
              p(208, 309, "Best Time to Buy and Sell Stock with Cooldown",       "Medium", "State Machine DP"),
              p(209, 714, "Best Time to Buy and Sell Stock with Transaction Fee","Medium", "State Machine DP"),
              p(210, 123, "Best Time to Buy and Sell Stock III",                 "Hard",   "State Machine DP"),
              p(211, 188, "Best Time to Buy and Sell Stock IV",                  "Hard",   "State Machine DP"),
            ],
          },
          {
            name: "String & Hard DP",
            problems: [
              p(212, 72,  "Edit Distance",               "Hard", "2D DP",               true),
              p(213, 115, "Distinct Subsequences",       "Hard", "2D DP"),
              p(214, 10,  "Regular Expression Matching", "Hard", "2D DP"),
              p(215, 44,  "Wildcard Matching",           "Hard", "2D DP"),
              p(216, 140, "Word Break II",               "Hard", "Backtracking + Memo"),
            ],
          },
          {
            name: "Interval DP",
            problems: [
              p(217, 486, "Predict the Winner",       "Medium", "Interval DP"),
              p(218, 312, "Burst Balloons",           "Hard",   "Interval DP",  true),
              p(219, 354, "Russian Doll Envelopes",   "Hard",   "LIS + Sort",   true),
              p(220, 132, "Palindrome Partitioning II","Hard",  "Interval DP"),
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PHASE 10 — Greedy & Sorting
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 10,
    title: "Phase 10",
    subtitle: "Greedy & Sorting",
    prepTime: "1–2 days",
    tip: "Greedy = sort first, then make the locally optimal choice at each step. Merge Intervals is your anchor — if you can explain sort + sweep clearly, you get greedy.",
    sections: [
      {
        id: "s15",
        title: "Section 15 · Greedy & Sorting",
        patterns: [
          {
            name: "Greedy",
            problems: [
              p(221, 455,  "Assign Cookies",                     "Easy",   "Greedy + Sort"),
              p(222, 860,  "Lemonade Change",                    "Easy",   "Greedy"),
              p(223, 122,  "Best Time to Buy and Sell Stock II", "Medium", "Greedy",           true),
              p(224, 392,  "Is Subsequence",                     "Easy",   "Greedy / 2 Ptrs"),
              p(225, 55,   "Jump Game",                          "Medium", "Greedy",           true),
              p(226, 45,   "Jump Game II",                       "Medium", "Greedy",           true),
              p(227, 134,  "Gas Station",                        "Medium", "Greedy"),
              p(228, 406,  "Queue Reconstruction by Height",     "Medium", "Greedy + Sort"),
              p(229, 763,  "Partition Labels",                   "Medium", "Greedy",           true),
              p(230, 135,  "Candy",                              "Hard",   "Two-Pass Greedy",  true),
              p(231, 1029, "Two City Scheduling",                "Medium", "Greedy + Sort"),
            ],
          },
          {
            name: "Intervals & Sorting",
            problems: [
              p(232, 56,  "Merge Intervals",                            "Medium", "Sort + Merge",   true),
              p(233, 57,  "Insert Interval",                            "Medium", "Intervals"),
              p(234, 435, "Non-overlapping Intervals",                  "Medium", "Greedy + Sort",  true),
              p(235, 452, "Minimum Number of Arrows to Burst Balloons", "Medium", "Greedy + Sort"),
              p(236, 253, "Meeting Rooms II",                           "Medium", "Heap / Sweep",   true),
              p(237, 179, "Largest Number",                             "Medium", "Custom Sort",    true),
              p(238, 1353,"Maximum Number of Events That Can Be Attended","Medium","Greedy + Heap"),
            ],
          },
        ],
      },
    ],
  },

];

export default PHASES;