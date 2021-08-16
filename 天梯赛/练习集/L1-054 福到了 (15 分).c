#include<stdio.h>
int main()
{
	char zf,tu[101][101],dao[101][101];
	int num,flage=1,i,j,k,p,t,m,n;
	scanf("%c %d",&zf,&num);
	getchar();
	for(i=0;i<num;i++)
	{
		for(j=0;j<num;j++)
		{
			tu[i][j]=getchar(); 
		//	scanf("%c",&tu[i][j]);
		}
		getchar();
	}
	for(m=0;m<num;m++)
	{
		for(n=0;n<num;n++)
		{
			dao[m][n]=tu[num-m-1][num-n-1];
			dao[num-m-1][num-n-1]=tu[m][n];
		}
	}
	for(p=0;p<num;p++)
	{
		for(t=0;t<num;t++)
		{
			if(dao[p][t]!=tu[p][t])
			{
				flage=0;
				break;
			}
				
		}
		if(flage==0)
			break;
	}
	if(flage==1)
		printf("bu yong dao le\n");
	
	for(p=0;p<num;p++)
	{
		for(t=0;t<num;t++)
		{
			if(dao[p][t]=='@')
				//dao[p][t]=zf;
				printf("%c",zf);
			//printf("%c",dao[p][t]);
			else
				printf(" ");
		}
		printf("\n");
	}

	return 0;
}













