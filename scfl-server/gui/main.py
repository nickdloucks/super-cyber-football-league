import tkinter as tk
from PIL import ImageTk

root = tk.Tk()
root.title("SCFL Desktop App")
root.eval("tk::PlaceWindow . center")

frame1 = tk.Frame(width=1000, height=500, bg="#999999")
frame1.grid(row=0, column=0)


#frame1 widgets:
logo_img = ImageTk.PhotoImage(file="gui/assets/Aliens.png")
logo_widget = tk.Label(frame1, image=logo_img)
# logo_widget.image = logo_img
logo_widget.pack()

root.mainloop()