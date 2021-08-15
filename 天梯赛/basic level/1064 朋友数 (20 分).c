#include<stdio.h>
int main()
{
	int sz[10001],num,pyshu[37],i,j,k,m,n,r,t,v,a,b,c,d,result=0,flag=0,time=0,jg[37],temp;
	scanf("%d",&num);
	for(i=0;i<num;i++)
	{
		scanf("%d",&sz[i]);
	}
	for(j=1;j<37;j++)
	{
		pyshu[j]=j;
	}
	
	for(k=0;k<num;k++)
	{
		
		if(sz[k]<10)
		{
			pyshu[sz[k]]=0;
		}
		else if(sz[k]<100)
		{
			a=sz[k]%10;
			sz[k]=sz[k]/10;
			b=sz[k]+a;
			pyshu[b]=0;
		}
		else if(sz[k]<1000)
		{
			a=sz[k]%10;
			sz[k]=sz[k]/10;
			b=sz[k]%10;
			sz[k]=sz[k]/10;
			c=sz[k]+a+b;
			pyshu[c]=0;
		}
		else if(sz[k]<10000)
		{
			a=sz[k]%10;
			sz[k]=sz[k]/10;
			b=sz[k]%10;
			sz[k]=sz[k]/10;
			c=sz[k]%10;
			sz[k]=sz[k]/10;
			d=a+b+c+sz[k];
			pyshu[d]=0;
		}
	}
	for(m=1;m<37;m++)
	{
		if(pyshu[m]==0)
			result++;
	}
	printf("%d\n",result);
	for(n=1;n<37;n++)
	{
		
		if(pyshu[n]==0)
		{
			jg[time]=n;
			time++;
		}	
	}
	for(r=0;r<time;r++)
	{
		for(t=r;t<time;t++)
		{
			if(jg[t]<jg[r])
			{
				temp=jg[r];
				jg[r]=jg[t];
				jg[t]=temp;
			}
		}
	}
	for(v=0;v<time;v++)
	{
		if(flag==1)
			printf(" ");
		printf("%d",jg[v]);
		flag=1;
	}
	return 0;
}