#include<stdio.h>
int main()
{
	int num;
	char zf;
	int i,j,k,m,p,q,t,sum;
	scanf("%d %c",&num,&zf);
	if(num!=0)
	{
		sum=1;
		for(i=1;1;i++)
		{
			sum=sum+2*(2*i+1);
			if(sum>num)
				break;
		}
		
		for(p=1;p<i;p++)
		{
			for(q=i-p-1;q>0;q--)
				printf(" ");
			for(t=2*p+1;t>0;t--)
				printf("%c",zf);
			printf("\n");
		}
		printf("%d",num-sum+2*(2*(i+1)-1));
	}
	else
	{
		printf("0");
	}
	return 0;
}