<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/gavias_edupia/templates/views/course/views-view-unformatted--courses-featured.html.twig */
class __TwigTemplate_dc75e2b7f23210cd1d75e0e89d3f62698bda1cb4aca05f0b99c2f12344c8d1d6 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 5, "set" => 15];
        $filters = ["escape" => 6, "raw" => 18, "trim" => 18, "striptags" => 18, "split" => 18];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['for', 'set'],
                ['escape', 'raw', 'trim', 'striptags', 'split'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<div class=\"view-courses-featured-2\"> 
  <div class=\"tab-lists-content\">
    <div class=\"content-inner\">  
      <div class=\"tab-carousel-list-here slick-slider\"> 
        ";
        // line 5
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 6
            echo "            <div class=\"slick-slide\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["row"], "content", [])), "html", null, true);
            echo "</div>
         ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 8
        echo "      </div>
    </div>  
  </div>  
  <div class=\"carousel-nav\">
    <div class=\"content-inner\">
      <div class=\"tab-carousel-nav slick-slider\">
        ";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 15
            echo "          ";
            ob_start(function () { return ''; });
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["row"], "content", [])), "html", null, true);
            $context["tmp_content"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
            echo "   
          <div class=\"slick-slide\">
            <div class=\"info\">
              <div class=\"left\"><img src=\"";
            // line 18
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(twig_trim_filter(strip_tags($this->sandbox->ensureToStringAllowed($this->getAttribute(twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["tmp_content"] ?? null)), "<div class=\"cthumbnail\">"), 1, [], "array")))));
            echo "\" alt=\"\" /></div>
              <div class=\"right\">";
            // line 19
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(twig_trim_filter(strip_tags($this->sandbox->ensureToStringAllowed($this->getAttribute(twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["tmp_content"] ?? null)), "<div class=\"cthumbnail\">"), 3, [], "array")))));
            echo "</div>
            </div>
          </div>
         ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 23
        echo "      </div>
    </div>
   </div>    
</div>";
    }

    public function getTemplateName()
    {
        return "themes/gavias_edupia/templates/views/course/views-view-unformatted--courses-featured.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  109 => 23,  99 => 19,  95 => 18,  86 => 15,  82 => 14,  74 => 8,  65 => 6,  61 => 5,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_edupia/templates/views/course/views-view-unformatted--courses-featured.html.twig", "/Users/bradleywaye/Sites/local.waye.com/themes/gavias_edupia/templates/views/course/views-view-unformatted--courses-featured.html.twig");
    }
}
