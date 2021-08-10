#include<bits/stdc++.h>
using namespace std;
int  main()
{
	char shuz[12];
	int sz[10],flage0=0,n=0,sz0[10],flage1=0,i,j,k,l;
	for(i=0;i<10;i++)
		sz[i]=i;
	cin>>shuz;
	for(i=0;shuz[i]!='\0';i++)
	{
		sz[shuz[i]-'0']=-1;
	}
	printf("int[] arr = new int[]{");
	for(j=9;j>=0;j--)
	{
		
		if(sz[j]==-1)
		{
			if(flage0==1)
				printf(",");
			printf("%d",j);
			sz0[n]=j;
			flage0=1;
			n++;
		}
	}
	printf("};\nint[] index = new int[]{");
	for(k=0;shuz[k]!='\0';k++)
	{
		for(l=0;l<n;l++)
		{
			if(shuz[k]-'0'==sz0[l])
			{
				if(flage1==1)
					printf(",");
				printf("%d",l);
				flage1=1;
				break;
			}
		}	
	}
	printf("};");
	return 0;
}