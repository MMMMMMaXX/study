#include <bits/stdc++.h>
using namespace std;
int main()
{
    int num, n = 0;
    cin >> num;
    while (num != 1)
    {
        if (num % 2 == 0)
        {
            num = num / 2;
        }
        else if (num % 2 != 0)
        {
            num = (3 * num + 1) / 2;
        }
        n++;
    }
    printf("%d", n);
    return 0;
}