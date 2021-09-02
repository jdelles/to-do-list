/**
 * Creates a ballistics table 
 * @file ballistics.c
 * @author James Delles (jdelles)
 */
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

/** The constant gravitational value used for calculating the projectile trajectory */
#define GRAVITATIONAL_ACCELERATION 9.81

/** The degrees used in radian and degree calculations */
#define HALF_CIRCLE 180

/** Degree incrementation used to build table */
#define DEGREE_INCREMENTS 5

/** Degrees indicating firing the projectile straight up */
#define VERTICAL 90

/**
 * Converts degrees to radians. Uses the value of PI imported as M_PI
 * @param degrees the degree to convert
 * @return radians
 */
double convertDegreesToRadians(double degree) {
    return degree * M_PI / HALF_CIRCLE; 
}

/**
 * Converts radians to degrees. Uses the value of PI imported as M_PI
 * @param radian the radian to convert
 * @return degrees
 */
double convertRadiansToDegrees(double radian) {
     return radian * HALF_CIRCLE / M_PI; 
}

/**
 * Calculates the flight time or a projectile with a given angle and initial velocity
 * @param angle the angle of the projectile
 * @param v0 initial velocity of the projectile
 * @return the time the projectile is in the air
 */
double flightTime( int angle, double v0 )
{
    double angleInRadians = convertDegreesToRadians(angle); 
    return 2 * v0 * sin(angleInRadians) / GRAVITATIONAL_ACCELERATION; 
}

/**
 * Prints a row of the ballistics table give the angle, velocity and time
 * @param angle the angle of the projectile
 * @param v0 the initial velocity of the projectile
 * @param t the flight time of the projectile
 */
void tableRow( int angle, double v0, double t )
{
    // calculate distance    
    double angleInRadians = convertDegreesToRadians(angle); 
    double distance = v0  * t * cos(angleInRadians); 
    // print row
    printf("%10d | %10.3lf | %10.3lf | %10.3lf\n", angle, v0, t, distance); 
}

/**
 * Starts the program
 * Reads user input and constructs the table header then uses flightTime and
 * tableRow to print the rest of the table
 */
int main()
{
    printf("V0: "); 
    double velocity; 
    scanf("%lf", &velocity);
    printf("\n"); 
    // print header
    printf("     angle |         v0 |       time |   distance\n");
    printf("-----------+------------+------------+-----------\n");
    // print table rows
    for (int i = 0; i <= VERTICAL; i += DEGREE_INCREMENTS) {
        double t = flightTime(i, velocity); 
        tableRow(i, velocity, t); 
    }
    
}
