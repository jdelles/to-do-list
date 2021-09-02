/**
 * Reads input and outputs text with a border around the text
 * @file textbox.c
 * @author James Delles (jdelles)
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/** Width of each line of text in the box. */
#define LINE_WIDTH 60

/** Symbol used to draw the border around the box. */
#define BORDER '*'

/** Ascii code for new line */ 
#define NEW_LINE 10

/** Ascii code for space */ 
#define SPACE ' '

/**
 * Prints multiple copies of the given character followed by a new line
 * The number of copies is determined by the count parameter
 * @param ch the character to be printed
 * @param count the number of times the character is to be printed
 */
void lineOfChars(char ch, int count)
{
    putchar(BORDER);
    for (int i = 0; i < count; i++) {
        putchar(ch); 
    }
    putchar(BORDER); 
    putchar(NEW_LINE); 
}

/**
 * Reads and prints a single line of text inside the border. 
 * If the line isn't long enough, it adds spaces to create the rectangular box shape
 * @return false when it reaches the end of the file
 */
bool paddedLine()
{
    int ch = getchar(); 
    if (ch == EOF) {
        return false; 
    }
    int lineCount = 0; 
    if (ch == NEW_LINE) {
        lineOfChars(SPACE, LINE_WIDTH); 
        return true; 
    } else {
        putchar(BORDER);
        while (ch != NEW_LINE) {
            if (lineCount < LINE_WIDTH) {
                putchar(ch);     
                lineCount += 1;     
            }
            ch = getchar(); 
            if (ch == NEW_LINE && lineCount < LINE_WIDTH) {
                for (int i = lineCount; i < LINE_WIDTH; i++) {
                    putchar(SPACE);
                }
            }
        }
        putchar(BORDER);
        putchar(NEW_LINE); 
    }
    return true; 
}

/**
 * Starts the program
 * Calls on lineOfChars and paddedLine to create the rectangular border box 
 * from the text file provided
 */
int main()
{
    lineOfChars(BORDER, LINE_WIDTH);
    bool result = true; 
    while (result) {
        result = paddedLine(); 
    }
    lineOfChars(BORDER, LINE_WIDTH);
    return EXIT_SUCCESS; 
}
