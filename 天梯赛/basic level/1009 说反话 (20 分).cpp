#include <stdio.h>
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
struct ti
{
    char a[100];
};
int main()
{
    int num = 0, i, j, n = 0, flag = 0;
    char zz[100];
    string zf;
    struct ti z[100];
    getline(cin, zf);
    stack<char *> stk;
    for (i = 0; zf[i] != '\0'; i++)
    {
        zz[num] = zf[i];
        num++;
        if (zf[i] == ' ')
        {
            zz[num - 1] = '\0';
            num = 0;
            strcpy(z[n].a, zz);
            n++;
        }
        else if (zf[i + 1] == '\0')
        {
            zz[num] = '\0';
            num = 0;
            strcpy(z[n].a, zz);
            n++;
        }
    }
    for (j = n - 1; j >= 0; j--)
    {
        if (flag == 1)
            printf(" ");
        printf("%s", z[j].a);
        flag = 1;
    }
    return 0;
}