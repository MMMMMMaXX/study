#include<bits/stdc++.h>
using namespace std;
int main()
{
	int num,sz[100001],flage=0,i,j,k,m,a,b,c,ren,peo[100001],hhh[100001],n=0,wuyong;
	for(i=0;i<100000;i++)
	{
		sz[i]=i;
	}
	scanf("%d",&num);
	for(i=0;i<num;i++)
	{
		scanf("%d",&ren);
		if(ren!=1)
		{
			for(j=0;j<ren;j++)
			{
				scanf("%d",&hhh[j]);
				c=hhh[j];
				sz[c]=-1;
	
			}	
		}
		if(ren==1)
			scanf("%d",&wuyong);
	}
	scanf("%d",&a);
//	printf("d45gfd3");
	for(k=0;k<a;k++)
	{
		scanf("%d",&peo[k]);
	}
	for(m=0;m<a;m++)
	{
		b=peo[m];
		
		if(sz[b]!=-1)
		{
			if(flage==1)
				printf(" ");
			printf("%05d",peo[m]);
			sz[b]=-1;
			flage=1;
			n++;
		}
	}
	if(n==0)
		printf("No one is handsome");
	return 0;
}