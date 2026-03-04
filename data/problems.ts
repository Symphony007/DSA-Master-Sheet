import { Phase, Problem, Difficulty } from "@/types";

// ─── helper — keeps each problem entry concise ────────────────────────────────
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

// ─── PHASES ───────────────────────────────────────────────────────────────────
const PHASES: Phase[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 1 — Arrays & Strings
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Phase 1",
    subtitle: "Arrays & Strings — Foundation",
    sections: [
      {
        id: "s1",
        title: "Section 1 · Arrays — Hash Maps & Basic Traversal",
        patterns: [
          {
            name: "Hash Map / Hash Set",
            problems: [
              p(1,   1,   "Two Sum",                          "Easy",   "Hash Map",                   true),
              p(2,   217, "Contains Duplicate",               "Easy",   "Hash Set",                   true),
              p(3,   136, "Single Number",                    "Easy",   "XOR / Hash Set",             true),
              p(4,   268, "Missing Number",                   "Easy",   "Math / XOR"),
              p(5,   169, "Majority Element",                 "Easy",   "Hash Map / Moore Voting",    true),
              p(6,   128, "Longest Consecutive Sequence",     "Medium", "Hash Set",                   true),
              p(7,   49,  "Group Anagrams",                   "Medium", "Hash Map + Sort",            true),
            ],
          },
          {
            name: "Basic Array Manipulation",
            problems: [
              p(8,   66,  "Plus One",                                      "Easy",   "Array"),
              p(9,   283, "Move Zeroes",                                    "Easy",   "Two Pointers",   true),
              p(10,  26,  "Remove Duplicates from Sorted Array",            "Easy",   "Two Pointers"),
              p(11,  27,  "Remove Element",                                 "Easy",   "Two Pointers"),
              p(12,  88,  "Merge Sorted Array",                             "Easy",   "Two Pointers",   true),
              p(13,  121, "Best Time to Buy and Sell Stock",                "Easy",   "Array / One Pass", true),
              p(14,  189, "Rotate Array",                                   "Medium", "Array"),
              p(15,  448, "Find All Numbers Disappeared in an Array",       "Easy",   "Array"),
            ],
          },
          {
            name: "Subarray — Kadane's Algorithm",
            problems: [
              p(16,  53,  "Maximum Subarray",                  "Easy",   "Kadane's",         true),
              p(17,  152, "Maximum Product Subarray",          "Medium", "Kadane's Variant"),
              p(18,  918, "Maximum Sum Circular Subarray",     "Medium", "Kadane's Variant"),
            ],
          },
        ],
      },
      {
        id: "s2",
        title: "Section 2 · Strings — Basic Manipulation",
        patterns: [
          {
            name: "Two Pointers on Strings",
            problems: [
              p(19,  125, "Valid Palindrome",                  "Easy",   "Two Pointers",             true),
              p(20,  344, "Reverse String",                    "Easy",   "Two Pointers"),
              p(21,  5,   "Longest Palindromic Substring",     "Medium", "Expand Around Center",     true),
              p(22,  647, "Palindromic Substrings",            "Medium", "Expand Around Center",     true),
            ],
          },
          {
            name: "String Matching / Manipulation",
            problems: [
              p(23,  14,  "Longest Common Prefix",                              "Easy",   "String"),
              p(24,  58,  "Length of Last Word",                                "Easy",   "String"),
              p(25,  67,  "Add Binary",                                         "Easy",   "Math / String"),
              p(26,  28,  "Find the Index of the First Occurrence in a String", "Easy",   "String / KMP",   true),
              p(27,  151, "Reverse Words in a String",                          "Medium", "String"),
              p(28,  8,   "String to Integer Atoi",                             "Medium", "String Parsing", true),
              p(29,  271, "Encode and Decode Strings",                          "Medium", "String Design"),
              p(30,  179, "Largest Number",                                     "Medium", "Custom Sort",    true),
            ],
          },
          {
            name: "Hash Map on Strings",
            problems: [
              p(31,  242, "Valid Anagram",                         "Easy", "Hash Map",  true),
              p(32,  387, "First Unique Character in a String",    "Easy", "Hash Map"),
              p(33,  290, "Word Pattern",                          "Easy", "Hash Map"),
              p(34,  383, "Ransom Note",                           "Easy", "Hash Map"),
              p(35,  409, "Longest Palindrome",                    "Easy", "Hash Map"),
              p(36,  205, "Isomorphic Strings",                    "Easy", "Hash Map"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 2 — Basic Binary Search
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    title: "Phase 2",
    subtitle: "Basic Binary Search — Mini Phase",
    sections: [
      {
        id: "s3",
        title: "Section 3 · Binary Search — Intro",
        patterns: [
          {
            name: "Direct Binary Search",
            problems: [
              p(37,  704, "Binary Search",                    "Easy", "Binary Search"),
              p(38,  278, "First Bad Version",                "Easy", "Binary Search",        true),
              p(39,  374, "Guess Number Higher or Lower",     "Easy", "Binary Search"),
              p(40,  367, "Valid Perfect Square",             "Easy", "Binary Search"),
              p(41,  69,  "Sqrtx",                           "Easy", "BS on Answer"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 3 — Stacks, Queues & Linked Lists
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    title: "Phase 3",
    subtitle: "Stacks, Queues & Linked Lists",
    sections: [
      {
        id: "s4",
        title: "Section 4 · Stacks & Queues",
        patterns: [
          {
            name: "Basic Stack",
            problems: [
              p(42,  20,   "Valid Parentheses",                        "Easy",   "Stack",          true),
              p(43,  155,  "Min Stack",                                "Easy",   "Stack with Aux", true),
              p(44,  150,  "Evaluate Reverse Polish Notation",         "Medium", "Stack"),
              p(45,  394,  "Decode String",                            "Medium", "Stack",          true),
              p(46,  1249, "Minimum Remove to Make Valid Parentheses", "Medium", "Stack"),
              p(47,  32,   "Longest Valid Parentheses",                "Hard",   "Stack / DP",     true),
            ],
          },
          {
            name: "Monotonic Stack",
            problems: [
              p(48,  496, "Next Greater Element I",           "Easy",   "Monotonic Stack"),
              p(49,  739, "Daily Temperatures",               "Medium", "Monotonic Stack",          true),
              p(50,  402, "Remove K Digits",                  "Medium", "Monotonic Stack"),
              p(51,  735, "Asteroid Collision",               "Medium", "Stack"),
              p(52,  84,  "Largest Rectangle in Histogram",   "Hard",   "Monotonic Stack",          true),
              p(53,  42,  "Trapping Rain Water",              "Hard",   "Mono Stack / Two Pointers", true),
            ],
          },
          {
            name: "Stack / Queue Design",
            problems: [
              p(54,  225, "Implement Stack using Queues",  "Easy", "Stack / Queue"),
              p(55,  232, "Implement Queue using Stacks",  "Easy", "Stack / Queue"),
            ],
          },
        ],
      },
      {
        id: "s5",
        title: "Section 5 · Linked Lists",
        patterns: [
          {
            name: "Basic Operations",
            problems: [
              p(56,  206, "Reverse Linked List",                    "Easy",   "Iterative / Recursive", true),
              p(57,  21,  "Merge Two Sorted Lists",                 "Easy",   "Merge",                 true),
              p(58,  83,  "Remove Duplicates from Sorted List",     "Easy",   "Linked List"),
              p(59,  203, "Remove Linked List Elements",            "Easy",   "Dummy Head"),
              p(60,  237, "Delete Node in a Linked List",           "Easy",   "Linked List"),
              p(61,  82,  "Remove Duplicates from Sorted List II",  "Medium", "Dummy Head"),
              p(62,  2,   "Add Two Numbers",                        "Medium", "Linked List + Math",    true),
            ],
          },
          {
            name: "Fast / Slow Pointers",
            problems: [
              p(63,  876, "Middle of the Linked List",          "Easy",   "Fast / Slow",          true),
              p(64,  141, "Linked List Cycle",                  "Easy",   "Fast / Slow",          true),
              p(65,  160, "Intersection of Two Linked Lists",   "Easy",   "Two Pointers"),
              p(66,  234, "Palindrome Linked List",             "Easy",   "Fast/Slow + Reverse"),
              p(67,  19,  "Remove Nth Node From End of List",   "Medium", "Fast / Slow",          true),
              p(68,  142, "Linked List Cycle II",               "Medium", "Fast/Slow + Math",     true),
            ],
          },
          {
            name: "Restructuring",
            problems: [
              p(69,  143, "Reorder List",  "Medium", "Fast/Slow + Reverse + Merge", true),
              p(70,  148, "Sort List",     "Medium", "Merge Sort on LL",            true),
            ],
          },
        ],
      },
      {
        id: "s6",
        title: "Section 6 · LRU Cache — Design Bridge",
        patterns: [
          {
            name: "Design",
            problems: [
              p(71,  146, "LRU Cache", "Medium", "Hash Map + Doubly Linked List", true),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 4 — Full Binary Search
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 4,
    title: "Phase 4",
    subtitle: "Full Binary Search — Medium + Hard",
    sections: [
      {
        id: "s7",
        title: "Section 7 · Binary Search — Applied",
        patterns: [
          {
            name: "Rotated / Variant Arrays",
            problems: [
              p(72,  33,  "Search in Rotated Sorted Array",                  "Medium", "Binary Search", true),
              p(73,  34,  "Find First and Last Position of Element in Sorted Array", "Medium", "Binary Search", true),
              p(74,  153, "Find Minimum in Rotated Sorted Array",             "Medium", "Binary Search", true),
              p(75,  162, "Find Peak Element",                                "Medium", "Binary Search"),
              p(76,  81,  "Search in Rotated Sorted Array II",               "Medium", "Binary Search"),
              p(77,  540, "Single Element in a Sorted Array",                "Medium", "Binary Search"),
            ],
          },
          {
            name: "2D Binary Search",
            problems: [
              p(78,  74,  "Search a 2D Matrix",    "Medium", "Binary Search",    true),
              p(79,  240, "Search a 2D Matrix II", "Medium", "Staircase Search"),
            ],
          },
          {
            name: "Binary Search on Answer",
            problems: [
              p(80,  875,  "Koko Eating Bananas",                    "Medium", "BS on Answer",        true),
              p(81,  1011, "Capacity to Ship Packages Within D Days","Medium", "BS on Answer"),
              p(82,  378,  "Kth Smallest Element in a Sorted Matrix","Medium", "BS on Answer / Heap"),
              p(83,  658,  "Find K Closest Elements",                "Medium", "Binary Search"),
              p(84,  410,  "Split Array Largest Sum",                "Hard",   "BS on Answer + DP",   true),
              p(85,  4,    "Median of Two Sorted Arrays",            "Hard",   "Binary Search",       true),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 5 — Two Pointers, Sliding Window & Prefix Sum
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    title: "Phase 5",
    subtitle: "Two Pointers, Sliding Window & Prefix Sum",
    sections: [
      {
        id: "s8",
        title: "Section 8 · Two Pointers (Medium)",
        patterns: [
          {
            name: "Opposite-End Two Pointers",
            problems: [
              p(86,  167, "Two Sum II Input Array Is Sorted", "Medium", "Two Pointers"),
              p(87,  11,  "Container With Most Water",        "Medium", "Two Pointers",         true),
              p(88,  15,  "3Sum",                             "Medium", "Sort + Two Pointers",  true),
              p(89,  16,  "3Sum Closest",                     "Medium", "Sort + Two Pointers"),
              p(90,  18,  "4Sum",                             "Medium", "Sort + Two Pointers"),
              p(91,  75,  "Sort Colors",                      "Medium", "Dutch National Flag",  true),
              p(92,  287, "Find the Duplicate Number",        "Medium", "Fast/Slow / BS",       true),
              p(93,  31,  "Next Permutation",                 "Medium", "Array"),
            ],
          },
        ],
      },
      {
        id: "s9",
        title: "Section 9 · Sliding Window",
        patterns: [
          {
            name: "Fixed-Size Window",
            problems: [
              p(94,  643, "Maximum Average Subarray I",   "Easy",   "Fixed Window"),
              p(95,  567, "Permutation in String",        "Medium", "Fixed Window + Hash"),
              p(96,  438, "Find All Anagrams in a String","Medium", "Fixed Window + Hash",  true),
            ],
          },
          {
            name: "Variable-Size Window",
            problems: [
              p(97,  209,  "Minimum Size Subarray Sum",                      "Medium", "Variable Window",          true),
              p(98,  3,    "Longest Substring Without Repeating Characters", "Medium", "Variable Window + Set",    true),
              p(99,  424,  "Longest Repeating Character Replacement",        "Medium", "Variable Window + Hash",   true),
              p(100, 1004, "Max Consecutive Ones III",                       "Medium", "Variable Window"),
              p(101, 76,   "Minimum Window Substring",                       "Hard",   "Variable Window + Hash",   true),
              p(102, 239,  "Sliding Window Maximum",                         "Hard",   "Monotonic Deque",          true),
            ],
          },
        ],
      },
      {
        id: "s10",
        title: "Section 10 · Prefix Sum & Intervals",
        patterns: [
          {
            name: "Prefix Sum",
            problems: [
              p(103, 303, "Range Sum Query Immutable",       "Easy",   "Prefix Sum"),
              p(104, 238, "Product of Array Except Self",    "Medium", "Prefix + Suffix Product", true),
              p(105, 560, "Subarray Sum Equals K",           "Medium", "Prefix Sum + Hash Map",   true),
              p(106, 974, "Subarray Sums Divisible by K",    "Medium", "Prefix Sum + Modulo"),
              p(107, 523, "Continuous Subarray Sum",         "Medium", "Prefix Sum + Modulo"),
              p(108, 304, "Range Sum Query 2D Immutable",    "Medium", "2D Prefix Sum"),
            ],
          },
          {
            name: "Intervals",
            problems: [
              p(109, 56,  "Merge Intervals",                                  "Medium", "Sort + Merge",    true),
              p(110, 57,  "Insert Interval",                                  "Medium", "Intervals"),
              p(111, 435, "Non-overlapping Intervals",                        "Medium", "Greedy + Sort"),
              p(112, 452, "Minimum Number of Arrows to Burst Balloons",       "Medium", "Greedy + Sort"),
              p(113, 253, "Meeting Rooms II",                                 "Medium", "Heap / Sweep Line"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 6 — Trees (Easy) → Heaps → Trees (Medium)
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 6,
    title: "Phase 6",
    subtitle: "Trees (Easy) → Heaps → Trees (Medium)",
    sections: [
      {
        id: "s11",
        title: "Section 11 · Recursion Warm-Up (Before Trees)",
        patterns: [
          {
            name: "Conceptual exercises — implement factorial, fibonacci, and power(x,n) by hand before proceeding",
            problems: [],
          },
        ],
      },
      {
        id: "s12",
        title: "Section 12 · Trees (Easy)",
        patterns: [
          {
            name: "DFS / Recursive Tree Problems",
            problems: [
              p(114, 104, "Maximum Depth of Binary Tree",  "Easy", "DFS", true),
              p(115, 226, "Invert Binary Tree",            "Easy", "DFS", true),
              p(116, 100, "Same Tree",                     "Easy", "DFS", true),
              p(117, 101, "Symmetric Tree",                "Easy", "DFS", true),
              p(118, 110, "Balanced Binary Tree",          "Easy", "DFS", true),
              p(119, 543, "Diameter of Binary Tree",       "Easy", "DFS", true),
              p(120, 112, "Path Sum",                      "Easy", "DFS"),
              p(121, 257, "Binary Tree Paths",             "Easy", "DFS + Backtrack"),
              p(122, 404, "Sum of Left Leaves",            "Easy", "DFS"),
              p(123, 572, "Subtree of Another Tree",       "Easy", "DFS"),
              p(124, 617, "Merge Two Binary Trees",        "Easy", "DFS"),
              p(125, 111, "Minimum Depth of Binary Tree",  "Easy", "BFS / DFS"),
            ],
          },
          {
            name: "BST (Easy)",
            problems: [
              p(126, 235, "Lowest Common Ancestor of a Binary Search Tree", "Easy", "BST Property",      true),
              p(127, 108, "Convert Sorted Array to Binary Search Tree",     "Easy", "Divide & Conquer"),
            ],
          },
          {
            name: "BFS — Level Order (Intro)",
            problems: [
              p(128, 94,  "Binary Tree Inorder Traversal",       "Easy",   "DFS / Iterative"),
              p(129, 102, "Binary Tree Level Order Traversal",   "Medium", "BFS",  true),
            ],
          },
        ],
      },
      {
        id: "s13",
        title: "Section 13 · Heaps / Priority Queue",
        patterns: [
          {
            name: "Top-K",
            problems: [
              p(130, 215, "Kth Largest Element in an Array",  "Medium", "Heap / Quickselect", true),
              p(131, 347, "Top K Frequent Elements",          "Medium", "Heap + Hash",         true),
              p(132, 692, "Top K Frequent Words",             "Medium", "Heap + Hash"),
              p(133, 973, "K Closest Points to Origin",       "Medium", "Heap",                true),
              p(134, 451, "Sort Characters By Frequency",     "Medium", "Heap + Hash"),
            ],
          },
          {
            name: "Heap Design / Scheduling",
            problems: [
              p(135, 355,  "Design Twitter",                    "Medium", "Heap + Hash"),
              p(136, 621,  "Task Scheduler",                    "Medium", "Greedy + Heap",        true),
              p(137, 1167, "Minimum Cost to Connect Sticks",    "Medium", "Heap"),
              p(138, 502,  "IPO",                               "Hard",   "Two Heaps + Greedy"),
            ],
          },
          {
            name: "Two Heaps",
            problems: [
              p(139, 295, "Find Median from Data Stream",  "Hard", "Two Heaps", true),
              p(140, 480, "Sliding Window Median",         "Hard", "Two Heaps"),
            ],
          },
        ],
      },
      {
        id: "s14",
        title: "Section 14 · Trees (Medium)",
        patterns: [
          {
            name: "BFS — Level-Order Variants",
            problems: [
              p(141, 103, "Binary Tree Zigzag Level Order Traversal",  "Medium", "BFS + Deque"),
              p(142, 199, "Binary Tree Right Side View",               "Medium", "BFS",          true),
              p(143, 513, "Find Bottom Left Tree Value",               "Medium", "BFS"),
              p(144, 662, "Maximum Width of Binary Tree",              "Medium", "BFS + Index"),
              p(145, 116, "Populating Next Right Pointers in Each Node","Medium", "BFS"),
            ],
          },
          {
            name: "Tree Construction & Serialization",
            problems: [
              p(146, 105, "Construct Binary Tree from Preorder and Inorder Traversal",   "Medium", "Divide & Conquer", true),
              p(147, 106, "Construct Binary Tree from Inorder and Postorder Traversal",  "Medium", "Divide & Conquer"),
              p(148, 114, "Flatten Binary Tree to Linked List",                          "Medium", "DFS"),
              p(149, 297, "Serialize and Deserialize Binary Tree",                       "Hard",   "BFS / DFS",        true),
            ],
          },
          {
            name: "DFS — Path Problems",
            problems: [
              p(150, 129, "Sum Root to Leaf Numbers",               "Medium", "DFS"),
              p(151, 437, "Path Sum III",                           "Medium", "DFS + Prefix Sum",  true),
              p(152, 236, "Lowest Common Ancestor of a Binary Tree","Medium", "DFS",               true),
              p(153, 124, "Binary Tree Maximum Path Sum",           "Hard",   "DFS",               true),
            ],
          },
          {
            name: "BST Operations (Medium)",
            problems: [
              p(154, 98,  "Validate Binary Search Tree",         "Medium", "DFS",           true),
              p(155, 230, "Kth Smallest Element in a BST",       "Medium", "Inorder DFS",   true),
              p(156, 173, "Binary Search Tree Iterator",         "Medium", "Stack / Inorder"),
              p(157, 538, "Convert BST to Greater Tree",         "Medium", "Reverse Inorder"),
              p(158, 450, "Delete Node in a BST",                "Medium", "BST"),
              p(159, 701, "Insert into a Binary Search Tree",    "Medium", "BST"),
            ],
          },
          {
            name: "DP on Trees",
            problems: [
              p(160, 337, "House Robber III", "Medium", "DP on Tree"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 7 — Backtracking
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    title: "Phase 7",
    subtitle: "Backtracking",
    sections: [
      {
        id: "s15",
        title: "Section 15 · Backtracking",
        patterns: [
          {
            name: "Subsets & Combinations",
            problems: [
              p(161, 78,  "Subsets",              "Medium", "Backtracking",          true),
              p(162, 90,  "Subsets II",           "Medium", "Backtracking + Dedup"),
              p(163, 77,  "Combinations",         "Medium", "Backtracking"),
              p(164, 39,  "Combination Sum",      "Medium", "Backtracking + Reuse",  true),
              p(165, 40,  "Combination Sum II",   "Medium", "Backtracking + Dedup"),
              p(166, 216, "Combination Sum III",  "Medium", "Backtracking"),
            ],
          },
          {
            name: "Permutations",
            problems: [
              p(167, 46, "Permutations",   "Medium", "Backtracking",          true),
              p(168, 47, "Permutations II","Medium", "Backtracking + Dedup"),
            ],
          },
          {
            name: "String Backtracking",
            problems: [
              p(169, 17,  "Letter Combinations of a Phone Number", "Medium", "Backtracking"),
              p(170, 22,  "Generate Parentheses",                  "Medium", "Backtracking",         true),
              p(171, 131, "Palindrome Partitioning",               "Medium", "Backtracking + DP",    true),
              p(172, 93,  "Restore IP Addresses",                  "Medium", "Backtracking"),
            ],
          },
          {
            name: "Grid / Hard Backtracking",
            problems: [
              p(173, 79,  "Word Search",               "Medium", "Backtracking on Grid",   true),
              p(174, 51,  "N-Queens",                  "Hard",   "Backtracking",           true),
              p(175, 37,  "Sudoku Solver",             "Hard",   "Backtracking"),
              p(176, 301, "Remove Invalid Parentheses","Hard",   "Backtracking + BFS"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 8 — Greedy
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 8,
    title: "Phase 8",
    subtitle: "Greedy",
    sections: [
      {
        id: "s16",
        title: "Section 16 · Greedy",
        patterns: [
          {
            name: "Scheduling / Intervals / Jump Games",
            problems: [
              p(177, 455, "Assign Cookies",                  "Easy",   "Greedy + Sort"),
              p(178, 860, "Lemonade Change",                 "Easy",   "Greedy"),
              p(179, 122, "Best Time to Buy and Sell Stock II","Medium","Greedy",            true),
              p(180, 392, "Is Subsequence",                  "Easy",   "Greedy / Two Pointers"),
              p(181, 55,  "Jump Game",                       "Medium", "Greedy",            true),
              p(182, 45,  "Jump Game II",                    "Medium", "Greedy",            true),
              p(183, 134, "Gas Station",                     "Medium", "Greedy"),
              p(184, 406, "Queue Reconstruction by Height",  "Medium", "Greedy + Sort"),
              p(185, 763, "Partition Labels",                "Medium", "Greedy",            true),
              p(186, 621, "Task Scheduler (🔁 revisit)",     "Medium", "Greedy + Heap",     true),
              p(187, 135, "Candy",                           "Hard",   "Two-Pass Greedy",   true),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 9 — DP Wave 1
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 9,
    title: "Phase 9",
    subtitle: "DP Wave 1 — 1D, Sequences, Basic 2D",
    sections: [
      {
        id: "s17",
        title: "Section 17 · DP Wave 1",
        patterns: [
          {
            name: "1D DP (Linear)",
            problems: [
              p(188, 70,  "Climbing Stairs",            "Easy",   "1D DP",          true),
              p(189, 746, "Min Cost Climbing Stairs",   "Easy",   "1D DP",          true),
              p(190, 198, "House Robber",               "Easy",   "1D DP",          true),
              p(191, 213, "House Robber II",            "Medium", "1D DP Circular", true),
              p(192, 338, "Counting Bits",              "Easy",   "1D DP / Bit"),
              p(193, 413, "Arithmetic Slices",          "Medium", "1D DP"),
              p(194, 91,  "Decode Ways",                "Medium", "1D DP",          true),
              p(195, 139, "Word Break",                 "Medium", "1D DP",          true),
              p(196, 279, "Perfect Squares",            "Medium", "1D DP / BFS"),
            ],
          },
          {
            name: "Subsequence DP",
            problems: [
              p(197, 300,  "Longest Increasing Subsequence",           "Medium", "Subsequence DP / BS", true),
              p(198, 1143, "Longest Common Subsequence",               "Medium", "2D DP",               true),
              p(199, 516,  "Longest Palindromic Subsequence",          "Medium", "2D DP"),
              p(200, 673,  "Number of Longest Increasing Subsequences","Medium", "DP"),
            ],
          },
          {
            name: "Basic 2D Grid DP",
            problems: [
              p(201, 62,  "Unique Paths",      "Medium", "2D DP", true),
              p(202, 63,  "Unique Paths II",   "Medium", "2D DP"),
              p(203, 64,  "Minimum Path Sum",  "Medium", "2D DP", true),
              p(204, 221, "Maximal Square",    "Medium", "2D DP", true),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 10 — Graphs
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 10,
    title: "Phase 10",
    subtitle: "Graphs",
    sections: [
      {
        id: "s18",
        title: "Section 18 · Graphs",
        patterns: [
          {
            name: "DFS / BFS on Grid (Graph Warm-up)",
            problems: [
              p(205, 733, "Flood Fill",                    "Easy",   "DFS on Grid"),
              p(206, 200, "Number of Islands",             "Medium", "DFS / BFS",          true),
              p(207, 695, "Max Area of Island",            "Medium", "DFS",                true),
              p(208, 463, "Island Perimeter",              "Easy",   "Grid"),
              p(209, 994, "Rotting Oranges",               "Medium", "Multi-source BFS",   true),
              p(210, 542, "01 Matrix",                     "Medium", "Multi-source BFS"),
              p(211, 130, "Surrounded Regions",            "Medium", "DFS from Border"),
              p(212, 417, "Pacific Atlantic Water Flow",   "Medium", "DFS / BFS",          true),
            ],
          },
          {
            name: "Union-Find",
            problems: [
              p(213, 547, "Number of Provinces",                              "Medium", "Union-Find / DFS", true),
              p(214, 323, "Number of Connected Components in an Undirected Graph","Medium","Union-Find"),
              p(215, 684, "Redundant Connection",                             "Medium", "Union-Find"),
              p(216, 785, "Is Graph Bipartite",                               "Medium", "BFS Coloring"),
            ],
          },
          {
            name: "Topological Sort",
            problems: [
              p(217, 207, "Course Schedule",    "Medium", "Topo Sort — Cycle Detection", true),
              p(218, 210, "Course Schedule II", "Medium", "Topological Sort",            true),
              p(219, 269, "Alien Dictionary",   "Hard",   "Topological Sort",            true),
            ],
          },
          {
            name: "Shortest Path",
            problems: [
              p(220, 127, "Word Ladder",                            "Hard",   "BFS",                   true),
              p(221, 743, "Network Delay Time",                     "Medium", "Dijkstra"),
              p(222, 399, "Evaluate Division",                      "Medium", "DFS / Union-Find"),
              p(223, 329, "Longest Increasing Path in a Matrix",    "Hard",   "DFS + Memoization",     true),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 11 — DP Wave 2
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 11,
    title: "Phase 11",
    subtitle: "DP Wave 2 — Knapsack, Interval, Stock, Hard",
    sections: [
      {
        id: "s19",
        title: "Section 19 · DP Wave 2",
        patterns: [
          {
            name: "Knapsack DP",
            problems: [
              p(224, 322,  "Coin Change",                   "Medium", "Unbounded Knapsack", true),
              p(225, 518,  "Coin Change 2",                 "Medium", "Unbounded Knapsack", true),
              p(226, 416,  "Partition Equal Subset Sum",    "Medium", "0/1 Knapsack",       true),
              p(227, 494,  "Target Sum",                    "Medium", "0/1 Knapsack",       true),
              p(228, 474,  "Ones and Zeroes",               "Medium", "2D Knapsack"),
              p(229, 1049, "Last Stone Weight II",          "Medium", "0/1 Knapsack"),
              p(230, 377,  "Combination Sum IV",            "Medium", "Unbounded Knapsack"),
            ],
          },
          {
            name: "Stock / State Machine DP",
            problems: [
              p(231, 309, "Best Time to Buy and Sell Stock with Cooldown",     "Medium", "State Machine DP"),
              p(232, 714, "Best Time to Buy and Sell Stock with Transaction Fee","Medium","State Machine DP"),
              p(233, 123, "Best Time to Buy and Sell Stock III",               "Hard",   "State Machine DP"),
              p(234, 188, "Best Time to Buy and Sell Stock IV",                "Hard",   "State Machine DP"),
            ],
          },
          {
            name: "Interval DP",
            problems: [
              p(235, 486, "Predict the Winner",      "Medium", "Interval DP"),
              p(236, 343, "Integer Break",           "Medium", "DP / Math"),
              p(237, 312, "Burst Balloons",          "Hard",   "Interval DP",  true),
              p(238, 354, "Russian Doll Envelopes",  "Hard",   "LIS + Sort",   true),
            ],
          },
          {
            name: "Hard DP — String / Multi-sequence",
            problems: [
              p(239, 72,  "Edit Distance",               "Hard", "2D DP",               true),
              p(240, 10,  "Regular Expression Matching", "Hard", "2D DP"),
              p(241, 44,  "Wildcard Matching",           "Hard", "2D DP"),
              p(242, 115, "Distinct Subsequences",       "Hard", "2D DP"),
              p(243, 140, "Word Break II",               "Hard", "Backtracking + Memo"),
              p(244, 132, "Palindrome Partitioning II",  "Hard", "Interval DP"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 12 — Bit Manipulation & Math
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 12,
    title: "Phase 12",
    subtitle: "Bit Manipulation & Math",
    sections: [
      {
        id: "s20",
        title: "Section 20 · Bit Manipulation",
        patterns: [
          {
            name: "Easy Bit Tricks",
            problems: [
              p(245, 191, "Number of 1 Bits",      "Easy",   "Bit Manipulation"),
              p(246, 231, "Power of Two",           "Easy",   "Bit Manipulation"),
              p(247, 461, "Hamming Distance",       "Easy",   "XOR + Bit Count"),
              p(248, 190, "Reverse Bits",           "Easy",   "Bit Manipulation"),
              p(249, 260, "Single Number III",      "Medium", "XOR Grouping"),
            ],
          },
          {
            name: "Medium Bit Tricks",
            problems: [
              p(250, 137, "Single Number II",                "Medium", "Bit Counting"),
              p(251, 201, "Bitwise AND of Numbers Range",   "Medium", "Bit Manipulation"),
              p(252, 371, "Sum of Two Integers",            "Medium", "Bit Manipulation"),
              p(253, 318, "Maximum Product of Word Lengths","Medium", "Bit Masking"),
              p(254, 477, "Total Hamming Distance",         "Medium", "Bit Counting"),
              p(255, 29,  "Divide Two Integers",            "Medium", "Bit / Math"),
            ],
          },
        ],
      },
      {
        id: "s21",
        title: "Section 21 · Math (Curated)",
        patterns: [
          {
            name: "Essential Math Problems",
            problems: [
              p(256, 50,  "Powx N",                     "Medium", "Fast Power / Recursion",  true),
              p(257, 9,   "Palindrome Number",           "Easy",   "Math",                    true),
              p(258, 13,  "Roman to Integer",            "Easy",   "Math / Hash",             true),
              p(259, 12,  "Integer to Roman",            "Medium", "Math"),
              p(260, 172, "Factorial Trailing Zeroes",   "Medium", "Math"),
              p(261, 202, "Happy Number",                "Easy",   "Math + Fast/Slow"),
              p(262, 204, "Count Primes",                "Medium", "Sieve of Eratosthenes"),
              p(263, 166, "Fraction to Recurring Decimal","Medium","Math + Hash"),
              p(264, 7,   "Reverse Integer",             "Medium", "Math"),
              p(265, 263, "Ugly Number",                 "Easy",   "Math"),
              p(266, 264, "Ugly Number II",              "Medium", "DP / Heap"),
              p(267, 43,  "Multiply Strings",            "Medium", "Math / String"),
              p(268, 273, "Integer to English Words",    "Hard",   "String + Recursion"),
              p(269, 149, "Max Points on a Line",        "Hard",   "Math + Hash"),
            ],
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PHASE 13 — Hard Consolidation + Segment Tree Intro
  // ════════════════════════════════════════════════════════════════════════════
  {
    id: 13,
    title: "Phase 13",
    subtitle: "Hard Consolidation + Segment Tree Intro",
    sections: [
      {
        id: "s22",
        title: "Section 22 · Segment Tree / BIT (Light Intro)",
        patterns: [
          {
            name: "Segment Tree / BIT",
            problems: [
              p(270, 307, "Range Sum Query Mutable",          "Medium", "Segment Tree / BIT"),
              p(271, 315, "Count of Smaller Numbers After Self","Hard", "Merge Sort / BIT"),
            ],
          },
        ],
      },
      {
        id: "s23",
        title: "Section 23 · Hard Multi-Pattern Problems",
        patterns: [
          {
            name: "Spend 25–30 min attempting each before looking at hints",
            problems: [
              p(272, 85,   "Maximal Rectangle",                          "Hard", "Histogram Stack + 2D DP"),
              p(273, 41,   "First Missing Positive",                     "Hard", "Array In-place Hashing",  true),
              p(274, 895,  "Maximum Frequency Stack",                    "Hard", "Stack + Hash Map"),
              p(275, 460,  "LFU Cache",                                  "Hard", "Hash Map + Ordered DS"),
              p(276, 332,  "Reconstruct Itinerary",                      "Hard", "DFS + Eulerian Path"),
              p(277, 218,  "The Skyline Problem",                        "Hard", "Heap + Sweep Line"),
              p(278, 1235, "Maximum Profit in Job Scheduling",           "Hard", "DP + Binary Search",      true),
              p(279, 862,  "Shortest Subarray with Sum at Least K",      "Hard", "Deque + Prefix Sum"),
              p(280, 968,  "Binary Tree Cameras",                        "Hard", "Greedy + DFS"),
              p(281, 685,  "Redundant Connection II",                    "Hard", "Union-Find Directed"),
              p(282, 759,  "Employee Free Time",                         "Hard", "Heap + Intervals"),
              p(283, 214,  "Shortest Palindrome",                        "Hard", "KMP / Rolling Hash"),
              p(284, 30,   "Substring with Concatenation of All Words",  "Hard", "Sliding Window + Hash"),
              p(285, 23,   "Merge k Sorted Lists",                       "Hard", "Heap + Linked List",      true),
              p(286, 25,   "Reverse Nodes in k-Group",                   "Hard", "Linked List + Recursion"),
            ],
          },
        ],
      },
    ],
  },
];

export default PHASES;