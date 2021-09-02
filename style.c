/**
 * This is a sample style program to test our understanding of the class style guide
 * @file style.c
 * @author James Delles (jdelles)
 */

#include <stdio.h>
#include <stdlib.h>

/** The maximum length of a line to be printed */ 
#define LINE_LENGTH_LIMIT 72

/** Length of the alphabet  */ 
#define LENGTH_OF_ALPHABET 26

/** Initial lowercase ASCII code */
#define LOWERCASE_ASCII_START 97

/**
 * Prints a random word using lowercase letters
 * @param x an integer value that determines the length of the word
 */
void printWord(int x)
{
    for (int i = 0; i < x; i++) {
        // Print a random lower-case letter.
        printf( "%c", LOWERCASE_ASCII_START + rand() % LENGTH_OF_ALPHABET );
    }
}

/**
 * Prints a random line of text and returns the word count 
 * @return a count of the number of words printed 
 */
int printLine()
{
    int count = 0, pos = 0, space = 0;
    int len = 1 + rand() % 10;
    // Print a line of words up to a limited length.
    while (pos + len + space < LINE_LENGTH_LIMIT) {
 	if (space > 0) {
            printf(" ");
        }
	printWord(len);
	pos += len + space;
	len = 1 + rand() % 10;
	space = 1;
	count += 1;
    }
    printf( "\n" );
    return count;
}

/**
 * Creates a paragraph containing n lines using the printLine function. 
 * @param n an integer value that determines how many lines are to be printed
 * @return the total number of lines created  
 */
int printParagraph(int n)
{
    int total = 0;
    for (int i = 0; i < n; i++) {
        total += printLine();
    }
    return total;
}

/**
 * Program starting point. Calls printParagraph and then prints the results. 
 * @return program exit status
 */
int main()
{
    int w = printParagraph(10);
    printf("Words: %d\n",w);
    return EXIT_SUCCESS;
}
