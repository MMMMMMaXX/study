#include <bits/stdc++.h>
using namespace std;
bool isprime(int n)
{
    int k;
    if (n <= 1)
        return false;
    int sqr = int(sqrt(n));
    for (k = 2; k <= sqr; k++)
    {
        if (n % k == 0)
            return false;
    }
    return true;
}
int main()
{
    int a, b, n = 0, i, flag = 0, time = 0;
    scanf("%d %d", &a, &b);
    time = 0;
    for (i = 0; 1; i++)
    {
        if (isprime(i) == true)
        {
            if (n >= a - 1 && (time + a) <= b)
            {
                if (time != 0 && (time) % 10 == 0)
                    printf("\n");
                if (flag == 1 && time % 10 != 0)
                    printf(" ");
                printf("%d", i);
                time++;
                flag = 1;
            }
            n++;
        }
        if (n == b + 1)
            break;
    }
    return 0;
}