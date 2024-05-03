#include <stdio.h>
#include <string.h>

// 사전 순으로 정렬하는 함수
void sortStrings(char arr[][51], int n) {
    char temp[51];
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (strcmp(arr[i], arr[j]) > 0) {
                strcpy(temp, arr[i]);
                strcpy(arr[i], arr[j]);
                strcpy(arr[j], temp);
            }
        }
    }
}

int main() {
    int n;

    // 책 권 수 입력받기
    scanf("%d", &n);

    // 책 제목 입력 받기
    char best[n][51];
    int cnt[n];

    for (int i = 0; i < n; i++) {
        scanf("%s", best[i]);
        cnt[i] = 1; 
    }

    // 책 제목을 사전순으로 정렬
    sortStrings(best, n);

    // 제일 많이 나온 책 찾기
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (strcmp(best[i], best[j]) == 0)
                cnt[i]++;
        }
    }

    // 제일 많이 팔린 책의 인덱스 번호 변수에 넣기
    int maxIndex = 0;
    for (int i = 1; i < n; i++) {
        if (cnt[i] > cnt[maxIndex])
            maxIndex = i;
    }

    // 제일 많이 팔린 책 출력
    printf("%s\n", best[maxIndex]);

    return 0;
}