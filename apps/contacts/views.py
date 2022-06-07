from django.shortcuts import render, redirect
from .models import Contact
from .forms import ContactForm


def contact_view(request):
    form=ContactForm()
    if request.method=='POST':
        form=ContactForm(request.POST or None)
        if form.is_valid():
            form.save()
            return redirect('/')
    ctx={
        'form':form
    }
    return render(request,'contact.html',ctx)


def about_view(request):
    return render(request,'about.html')
