#include <bits/stdc++.h>
using namespace std;
int main()
{
    
    printf("int[] arr = new int[]{");
    for (j = 9; j >= 0; j--)
    {
        if (sz[j] == -1)
        {
            if (flage0 == 1)
                printf(",");
            printf("%d", j);
            sz0[n] = j;
            flage0 = 1;
            n++;
        }
    }
    printf("};\nint[] index = new int[]{");
    for (k = 0; shuz[k] != '\0'; k++)
    {
        for (l = 0; l < n; l++)
        {
            if (shuz[k] - '0' == sz0[l])
            {
                if (flage1 == 1)
                    printf(",");
                printf("%d", l);
                flage1 = 1;
                break;
            }
        }
    }
    printf("};");
    return 0;
}