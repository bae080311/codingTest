import sys
input = sys.stdin.readline

n, m = map(int, input().split())
cards = list(map(int, input().split()))

result = []

for num1 in range(n):
    for num2 in range(num1 + 1, n):
        for num3 in range(num2 + 1, n):
            s = cards[num1] + cards[num2] + cards[num3]
            if s <= m:
                result.append(s)

print(max(result))