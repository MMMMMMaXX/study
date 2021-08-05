#include <stdio.h>
int main()
{
    int ren, ti, sum = 0, i, j, k, m, n, fen[101];
    int daan[101], jieguo[101], jie;
    scanf("%d %d", &ren, &ti);
    for (i = 0; i < ti; i++)
    {
        scanf("%d", &fen[i]);
    }
    for (j = 0; j < ti; j++)
    {
        scanf("%d", &daan[j]);
    }
    for (k = 0; k < ren; k++)
    {
        for (m = 0; m < ti; m++)
        {
            //	printf("%d ",daan[m]);
            scanf("%d", &jie);
            if (jie == daan[m])
            {
                sum = sum + fen[m];
            }
        }
        jieguo[k] = sum;
        sum = 0;
    }

    for (n = 0; n < ren; n++)
    {
        printf("%d\n", jieguo[n]);
    }
    return 0;
}