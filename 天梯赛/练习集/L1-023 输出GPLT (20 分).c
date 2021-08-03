#include<stdio.h>
#include<string.h>
int main()
{
	char shuz[10001];
	gets(shuz);
	int len,lon;
	len=strlen(shuz);
	int a=0,b=0,c=0,d=0,g=0,p=0,l=0,t=0;
	for(lon=0;lon<len;lon++)
	{
		if(shuz[a]=='g'||shuz[a]=='G')
		{
			g++;
		}
		else if(shuz[b]=='p'||shuz[b]=='P')
		{
			p++;
		}
		else if(shuz[c]=='l'||shuz[c]=='L')
		{
			l++;
		}
		else if(shuz[d]=='t'||shuz[d]=='T')
		{
			t++;	
		}
	}
	while(1)
	{
		if(g>0)
		{
			printf("G");
			g--;
		}
		if(p>0)
		{
			printf("P");
			p--;
		}
		if(l>0)
		{
			printf("L");
			l--;
		}
		if(t>0)
		{
			printf("T");
			t--;
		}
		if(g==0&&p==0&&l==0&&t==0)
		{
			break;
		}
	}
	return 0;
}