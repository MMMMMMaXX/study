#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    scanf("%d", &n);
    float a, b;
    set<float> se;
    for (int i = 0; i < n; i++)
    {
        scanf("%f %f", &a, &b);
        se.insert(sqrt(a * a + b * b));
    }
    printf("%.2f", *se.rbegin());
    return 0;
}