#include <bits/stdc++.h>
using namespace std;
int main()
{
    int num, sz[100001] = {0}, i, j, result, max, score, hao;
    scanf("%d", &num);
    for (i = 0; i < num; i++)
    {
        scanf("%d %d", &hao, &score);
        sz[hao] = sz[hao] + score;
    }
    max = sz[0];
    for (j = 1; j <= num; j++)
    {
        if (sz[j] > max)
        {
            max = sz[j];
            result = j;
        }
    }
    printf("%d %d", result, sz[result]);
    return 0;
}