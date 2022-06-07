from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    title=models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Tag(models.Model):
    title=models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Color(models.Model):
    color=models.CharField(max_length=200)

    def __str__(self):
        return self.color


class Size(models.Model):
    size=models.CharField(max_length=200)


TYPE=(
    (0 ,'Men'),
    (1,'Women'),
    (2,'Accessories')
)


class Product(models.Model):
    name=models.CharField(max_length=220)
    price=models.FloatField()
    description=models.TextField()
    type=models.IntegerField(choices=TYPE)
    color=models.ManyToManyField(Color)
    size=models.ManyToManyField(Size)
    created_at=models.DateTimeField(auto_now_add=True)
    views=models.IntegerField(default=0)
    mid_rate=models.FloatField(default=0)
    tag=models.ManyToManyField(Tag,blank=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    @property
    def get_mid_rate(self):
        rates = self.rate_set.all()
        mid = 0
        try:
            mid = sum([i.rate for i in rates]) / rates.count()
        except ZeroDivisionError:
            pass
        self.mid_rate = mid
        self.save()
        return mid


class ProductImage(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='products/')

    def __str__(self):
        return f'image of{self.product.name}'


class Rate(models.Model):
    RATE = (
        (0, 0),
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rate = models.IntegerField(choices=RATE, default=0)

    def __str__(self):
        return f'rate of {self.user.username}'


class AdditionalInformation(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    weight=models.FloatField()
    dimensions=models.CharField(max_length=50)
    materials=models.CharField(max_length=100)
    color=models.CharField(max_length=120)
    size=models.CharField(max_length=50)

    def __str__(self):
        return self.product.name


class Reviews(models.Model):
    product=models.OneToOneField(Product,on_delete=models.CASCADE)
    your_rate=models.IntegerField(default=0)
    your_review=models.TextField()
    name=models.CharField(max_length=100)
    email=models.EmailField()

    def __str__(self):
        return self.name


class Banner(models.Model):
    name=models.CharField(max_length=221)
    category=models.CharField(max_length=222)

    def __str__(self):
        return self.name


class BannerImage(models.Model):
    banner=models.ForeignKey(Banner,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='banners')