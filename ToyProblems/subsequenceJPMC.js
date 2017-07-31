// Programming Challenge Description:
// A subsequence of a given sequence S consists of S with zero or more elements deleted. Formally, a sequence Z = z1z2..zk is a subsequence of X = x1x2...xm, if there exists a strictly increasing sequence of indices (i) of X such that for all j=1,2,...k we have Xi = Zj. E.g. Z=bcdb is a subsequence of X=abcbdab with corresponding index sequence <2,3,5,7>

// Input:
// Your program should read lines from standard input. Each line contains two comma separated strings. The first is the sequence X and the second is the subsequence Z.

// Output:
// Print out the number of distinct occurrences of Z in X as a subsequence.

// Test 1
// Test Input Download Test Inputbabgbag,bag
// Expected Output Download Test Output5
// Test 2
// Test Input Download Test Inputrabbbit,rabbit
// Expected Output Download Test Output3

import sys
for line in sys.stdin:
    # print(line, end="")
    input = line.split("\n")
    input_two = input[0].split(",")
    sequence = input_two[0]
    sub = input_two[1]
    print(sequence, sub)

    def subsequence_occur(Z, X):
        seq, sub = len(Z), len(X)
        table = [0] * sub

        for i in range(seq):
            previous = 1
            for j in range(sub):
                current = table[j]
                if Z[i] == X[j]:
                    table[j] += previous
                previous = current
        return table[sub-1] if sub else 1

    print(subsequence_occur(sequence, sub))
