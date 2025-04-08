import math

def circle_area(radius):
    return math.pi * radius ** 2

def triangle_area(base, height):
    return 0.5 * base * height

def rect_area(length, width):
    return length * width

def main():
    print("Choose a shape (circle, triangle, rectangle):")
    shape = input().strip().lower()

    if shape == 'circle':
        radius = float(input("Enter the radius: "))
        area = circle_area(radius)
    elif shape == 'triangle':
        base = float(input("Enter the base: "))
        height = float(input("Enter the height: "))
        area = triangle_area(base, height)
    elif shape == 'rectangle':
        length = float(input("Enter the length: "))
        width = float(input("Enter the width: "))
        area = rect_area(length, width)
    else:
        print("Invalid shape")
        return

    print(f"Area of your {shape} is: {area}")

if __name__ == "__main__":
    main()
