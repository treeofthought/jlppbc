library('jsonlite')
library('ggplot2')
library("PerformanceAnalytics")
source('R/functions.R')

StackRatings()
dat <- LoadRatings()


wide <- ShapeRatingTable(dat)

all <- TrimRatingTable(wide)
all <- all[order(-Avg)]
WriteTableJSON(all, 'src/all.json')

wide[, low.rank := frankv(Avg, ties.method='min')]
low <- TrimRatingTable(wide[low.rank <= 5])
low <- low[order(Avg)]
WriteTableJSON(low, 'src/worst.json')

wide[, high.rank := frankv(Avg, order=-1, ties.method='min')]
best <- TrimRatingTable(wide[high.rank <= 5])
best <- best[order(-Avg)]
WriteTableJSON(best, 'src/best.json')

# Viz distributions
dat[, Reader := User]

agg <- dat[,.(Average=round(mean(Rating), 1),
              Std.Dev=round(sd(Rating), 1),
              Ratings=.N),
           .(Reader=User)]

wide[, cor(as.numeric(S), as.numeric(C), use='complete')]
wide[, cor(as.numeric(J), as.numeric(D), use='complete')]

ggplot(wide, aes(x=as.numeric(C), y=as.numeric(S))) +
  geom_point() +
  theme_bw()

ggplot(dat, aes(x=Reader, y=Rating)) +
  ggtitle('Rating Distributions') + 
  #geom_boxplot() +
  geom_errorbar(data=agg, aes(ymin=Average-Std.Dev, ymax=Average+Std.Dev, y=Average)) +
  geom_point(data=agg, aes(y=Average), size=3) +
  geom_jitter(height=0, width=0.3, alpha=0.2) +
  scale_y_continuous(breaks=seq(0, 10, 2)) +
  expand_limits(y=0) +
  theme_bw() + 
  theme(plot.title = element_text(hjust=0.5, size=14),
        axis.text.y = element_text(size=10),
        axis.text.x = element_text(size=12),
        axis.title.y = element_text(size=10),
        axis.title.x = element_blank(),
        axis.ticks = element_blank(),
        strip.text = element_text(size=6),
        legend.text = element_text(size=7),
        #plot.background = element_rect(fill='transparent'),
        #legend.background = element_rect(fill='transparent'),
        legend.position = 'top',
        legend.key.height = unit(0.1, 'cm'),
        legend.key.width = unit(1.5, 'cm'),
        panel.grid.minor = element_blank())


wide[Avg < 5, .(Title, Avg, D)]


wide.num <- wide[, .(C=as.numeric(C), D=as.numeric(D), J=as.numeric(J),
                     P=as.numeric(P), S=as.numeric(S))]
chart.Correlation(wide.num[, .(C, D, J, P, S)], histogram=TRUE, pch=19)
