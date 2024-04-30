#include <stdio.h>


int main() {
	
	int t;
	scanf("%d", &t);
	
	for(int i = 1; i <= t; i++) {
		for(int k = 0; k < t - i; k++) {
			printf(" ");
		}
		
		for(int k = 0; k < i; k++) {
			printf("*");
		}
		printf("\n");
	}
	
	return 0;
}