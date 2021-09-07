#include<stdio.h>
int main()
{
	float a;
	int foot,inch;
//	printf("请输入英尺 英寸");
	scanf("%f",&a);
	a=a/30.48;
	foot=a;
	inch=(a-foot)*12;
	printf("%d %d",foot,inch);
}