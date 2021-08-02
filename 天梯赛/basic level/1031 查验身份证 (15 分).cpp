#include<bits/stdc++.h>
using namespace std;
struct sfz{
	char haoma[19];
};
int main()
{
	int quanzhong[17]={7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2};
	char jiaoyanma[12]={'1','0','X','9','8','7','6','5','4','3','2'};
	int num,i,j,k,end,sum=0,flag=1,flag0=1;
	struct sfz zhenjian[101];
	scanf("%d",&num);
	for(i=0;i<num;i++)
	{
		scanf("%s",zhenjian[i].haoma);
	}
	for(j=0;j<num;j++)
	{
		for(k=0;k<17;k++)
		{
			if(zhenjian[j].haoma[k]=='X')
			{
				flag=0;
				break;
			}
			sum=sum+(zhenjian[j].haoma[k]-48)*quanzhong[k];
		}
		if(flag!=0)
		{
			end=sum%11;
			if(jiaoyanma[end]!=zhenjian[j].haoma[17])
			{
//				printf("jym:%c\n",jiaoyanma[end]);
				printf("%s\n",zhenjian[j].haoma);
				flag0=0;
			}
		}
		else if(flag==0)
		{
			flag=1;
			printf("%s\n",zhenjian[j].haoma);
			flag0=0;
		}	
		sum=0;
	}
	if(flag0==1)
	{
		printf("All passed");
	}
//	printf("%d",'0');48
	
	return 0;
}