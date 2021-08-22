#include<stdio.h>
void qSort(int a[],int l,int r)
{
	if(l<r)
	{
		int temp=a[l];
		int i=l,j=r;
		while(i<j)
		{
			while(i<j&&a[j]>temp)
				j--;
			if(i<j)
				a[i++]=a[j];
			while(i<j&&a[i]<temp)
				i++;
			if(i<j)
				a[j--]=a[i];
		}
		a[i]=temp;
		qSort(a,l,i-1);
		qSort(a,i+1,r);
	}
}
int main()
{
	int sz[100001],nan[50001],nv[50001],ren[100001],flag=0,i,j,k,m,n,t,result,num,dui,a,b;
	for(i=0;i<100000;i++)
	{
		sz[i]=i;
	}
	scanf("%d",&dui);
	for(j=0;j<dui;j++)
	{
		scanf("%d %d",&nan[j],&nv[j]);
	}
	
	scanf("%d",&num);
//	printf("%d\n",nan[num-5]);
//	printf("%d",sz[nan[num-5]]);
	result=num;
	for(k=0;k<num;k++)
	{
		scanf("%d",&ren[k]);
	//	printf("%d",sz[ren[k]]);
		sz[ren[k]]=-1;
	}
	
	for(m=0;m<dui;m++)
	{
		a=nan[m];
		b=nv[m];
//		printf("a,b=%d %d",a,b);
		if(sz[a]==-1&&sz[b]==-1)
		{
			for(n=0;n<num;n++)
			{
				if(ren[n]==a||ren[n]==b)
				{
					ren[n]=-1;
					result--;
				}
			}
		//	result=num-2;
		}
	}
	printf("%d\n",result);
	qSort(ren,0,num-1);
	for(t=0;t<num;t++)
	{
		if(ren[t]!=-1)
		{
			if(flag==1)
				printf(" ");
			printf("%05d",ren[t]);
			flag=1;
		}
	}
	return 0;
}