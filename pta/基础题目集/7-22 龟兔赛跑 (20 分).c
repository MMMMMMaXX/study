#include<stdio.h>
int main()
{
	int T,tu=0,gui=0;
	int times,i,j;
	scanf("%d",&T);
	if(T>=10)
	{ 
		for(times=0;times<T;times++)
		{
		//	printf("%d %d %d\n",gui,tu,times);
			if(times!=0&&times%10==0)
			{
				if(tu>gui)
				{
					for(i=0;i<30;i++)
					{
						gui+=3;
						times++;
						if(times==T)
						{
							break;
						}
					}
					
				}
				else if(tu<gui)
				{
					for(j=0;j<10;j++)
					{
						gui+=3;
						tu+=9;
						times++;
						if(times==T)
						{
							break;
						}
					}
				}
			}
			gui+=3;
			tu+=9;
			
		}
		gui-=3;
		tu-=9;
		if(tu>gui)
		{
			printf("^_^ %d",tu);
		}
		else if(gui>tu)
		{
			printf("@_@ %d",gui);
		}
		else
		{
			printf("-_- %d",tu);
		}
	}
	else
	printf("^_^ %d",T*9);
	return 0;
}