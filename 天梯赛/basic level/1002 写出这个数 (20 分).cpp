#include <bits/stdc++.h>
using namespace std;
int main()
{
    int i, j, sum = 0, n = 0, flage = 0, sz[10000], z;
    char a[10000];
    cin >> a;
    for (i = 0; a[i] != '\0'; i++)
    {
        sum = sum + a[i] - '0';
    }
    while (sum > 0)
    {
        z = sum % 10;
        sum = sum - z;
        sum = sum / 10;
        sz[n] = z;
        n++;
    }
    for (j = n - 1; j >= 0; j--)
    {
        if (flage == 1)
            printf(" ");
        switch (sz[j])
        {
        case 0:
            printf("ling");
            break;
        case 1:
            printf("yi");
            break;
        case 2:
            printf("er");
            break;
        case 3:
            printf("san");
            break;
        case 4:
            printf("si");
            break;
        case 5:
            printf("wu");
            break;
        case 6:
            printf("liu");
            break;
        case 7:
            printf("qi");
            break;
        case 8:
            printf("ba");
            break;
        case 9:
            printf("jiu");
            break;
        default:
            break;
        }
    }
    return 0;
}