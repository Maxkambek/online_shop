from django import forms
from .models import Reviews


class ReviewCreateForm(forms.ModelForm):
    class Meta:
        model=Reviews
        fields=['your_review','your_rate','name','email']
