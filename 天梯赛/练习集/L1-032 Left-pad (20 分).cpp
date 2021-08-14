#include<bits/stdc++.h>
using namespace std;
int main()
{
	int num,i,n=0;
	char zf;
	string a;
	scanf("%d %c",&num,&zf);
	getchar();
	getline(cin,a);
	int str=a.length();
	if(str>num)
	{
		for(i=str-num;i<str;i++)
			printf("%c",a[i]);
	}
	else if(str==num)
		cout<<a;
	else if(str<num)
	{
		for(i=0;i<num;i++)
		{
			if(i<num-str)
			{
				printf("%c",zf);
				n++;
			}
			else
				printf("%c",a[i-n]);
		}	
	}
	return 0;
}