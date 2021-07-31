#include <stdio.h>
#include <math.h>
int main()
{
    int num, x, a = -1, count = 0, max = 0, end, begain, i, j, k, temp = 1;
    scanf("%d", &num);
    x = sqrt(num) + 1;
    //	printf("x=%d\n",x);
    for (i = x; i > 1; i--)
    {
        if (num % i == 0)
        {
            for (j = i; j > 1; j--)
            {
                temp = temp * j;
                if (num % j == 0 && num % temp == 0)
                {
                    if (a == -1)
                        a = j;
                    count++;
                }
                else
                {
                    if (count >= max)
                    {
                        max = count;
                        begain = a;
                        end = j + 1;
                        //	printf("begain:%d,end:%d,count=%d,max=%d\n",begain,end,count,max);
                    }
                    count = 0;
                    a = -1;
                    temp = 1;
                    break;
                }
                if (j == 2)
                {
                    if (count >= max)
                    {
                        max = count;
                        begain = a;
                        end = j;
                        //	printf("begain:%d,end:%d,count=%d,max=%d\n",begain,end,count,max);
                    }
                    count = 0;
                    a = -1;
                    temp = 1;
                }
            }
        }
    }
    if (max != 0)
    {
        printf("%d\n", max);
        for (k = end; k < begain; k++)
        {
            printf("%d*", k);
        }
        printf("%d", begain);
    }
    else
    {
        printf("1\n%d", num);
    }
    return 0;
}